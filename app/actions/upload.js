import callApi, { uploadFileDirectly } from '../utils/apiCaller';
import { addGameplayRequest } from './feedback';

// REQUEST SIGNATURE
function requestSignature() {
  return {
    type: 'REQUEST_SIGNATURE'
  };
}

// RECEIVE WIN / MAC SIGNATURE
function receiveSignature(url, isWin, filename) {
  const type = isWin ? 'RECEIVE_WIN_SIGNATURE' : 'RECEIVE_MAC_SIGNATURE';
  return {
    type,
    url,
    filename
  };
}


// RECEIVE VIDEO SIGNATURE
function receiveVideoSignature() {
  return {
    type: 'RECEIVE_VIDEO_SIGNATURE'
  };
}


// REQUEST BUILD SIGNATURE
export function requestSignatureCall(file, isWin) {
  const prefix = (isWin ? 'win' : 'mac') + new Date().getTime();
  const filename = prefix + file.name;

  return dispatch => {
    dispatch(requestSignature());
    return callApi(`sign-s3?file-name=${filename}&file-type=${file.type}`).then(res => {
      dispatch(receiveSignature(res.url, isWin, filename));
      dispatch(uploadFile(file, res.signedRequest));
      return Promise.resolve(res);
    });
  };
}


// REQUEST VIDEO SIGNATURE
export function requestVideoSignature(file, feedback, gameplay) {
  const filename = gameplay.key;

  return dispatch => {
    dispatch(requestSignature());
    return callApi(`sign-s3?file-name=${filename}&file-type=${file.type}`).then(res => {
      dispatch(receiveVideoSignature());
      dispatch(uploadVideo(file, res.signedRequest, feedback, gameplay));
      return Promise.resolve(res);
    });
  };
}


// UPLOAD VIDEO DIRECTLY TO S3
function uploadVideo(file, signedRequest, feedback, gameplay) {
  return dispatch => {
    dispatch(startUpload());
    return uploadFileDirectly('PUT', signedRequest, file, () => {
      dispatch(addGameplayRequest(feedback, gameplay));
      dispatch(finishUpload());
    });
  };
}


// START UPLOAD
function startUpload() {
  return {
    type: 'START_UPLOAD'
  };
}


// FINISH UPLOAD
function finishUpload() {
  return {
    type: 'FINISH_UPLOAD'
  };
}


// UPLOAD BUILD DIRECTLY TO S3
function uploadFile(file, signedRequest) {
  return dispatch => {
    dispatch(startUpload());
    return uploadFileDirectly('PUT', signedRequest, file, () => {
      dispatch(finishUpload());
    });
  };
}
