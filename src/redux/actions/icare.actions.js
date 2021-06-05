import axios from 'axios';

export const INIT = "INIT";
export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";
export const EDIT_SUCCESS = "EDIT_SUCCESS";

export const init = () => {
    return {
        type: INIT,
    };
};

export const request = () => {
    return {
        type: REQUEST,
    };
};

export const success = (data) => {
    return {
        type: SUCCESS,
        data: data
    };
};

export const editSuccess = (data) => {
    return {
        type: EDIT_SUCCESS,
        payload: data
    };
};

export const failed = (err) => {
    return {
        type: FAILED,
        err,
    };
};

export const getIcareAction = (setFormEdit) => (dispatch) => {
    dispatch(init());

    return axios
            .get('http://api.yoshi.erwinata.com/icare')
            .then(result => {
                setFormEdit(result.data);
                dispatch(success(result.data));
            })
            .catch(err => dispatch(failed(err)))
};

export const uploadImageAction = (image, setProgressBar) => (dispatch) => {
    // e.preventDefault();
    // dispatch(request());

    let fd = new FormData();
    fd.append('image', image.file, image.name + "." + image.file.name.split('.').pop());

    return axios
        // .post('http://yoshi.erwinata.com/php/ImageUpload.php', fd, {
        // .post('php/ImageUpload.php', fd, {
        .post('http://localhost:3333', fd, {
            headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
          }, 
            onUploadProgress: ProgressEvent => {
                setProgressBar(Math.round(ProgressEvent.loaded / ProgressEvent.total * 100));
            }
        })
        .then(result => {
            // dispatch(success());
            return result.data.url;
        })
        .catch(err => {
            dispatch(failed());
            return err;
        })
};

export const editDataAction = (setShowProgressBar, dataSend, img, formEdit, setFormEdit, setHash) => (dispatch) => {

    let data = {
        ...dataSend,
        [img !== "" && "image"] : img,
    }

    return axios
            .put('http://api.yoshi.erwinata.com/icare/'+data.id, data ,{
                headers: {
                    Authorization: localStorage.ifgfToken
                }
            })
            .then(result => {
                if(result.data.status === "Token is Invalid"){
                    window.location = "/admin";
                }

                let newArray = formEdit.map((item) => {
                    if(item.id === result.data.id){
                        return data;
                    }else{
                        return item;
                    }
                });

                setFormEdit(
                    newArray
                );

                setHash(Date.now());

                setShowProgressBar({
                    ifgfyouth: false,
                    ifgfmen: false,
                    ifgfwoman: false,
                });
                dispatch(editSuccess());
            })
            .catch(err => 
                // console.log(err)
                dispatch(failed())
            );
            
}

export const editIcareAction = (e, image, setProgressBar, setShowProgressBar, data, formEdit, setFormEdit, setHash) => (dispatch) => {
    e.preventDefault();
    dispatch(request());

    if(image.file !== null){
        let uploadImg = dispatch(uploadImageAction(image, setProgressBar));
        uploadImg.then(result => {
            dispatch(editDataAction(setShowProgressBar, data, result, formEdit, setFormEdit, setHash));
        })
        .catch(err => dispatch(failed()));
    }
    else {
        dispatch(editDataAction(setShowProgressBar, data, "", formEdit, setFormEdit, setHash));
    }
};