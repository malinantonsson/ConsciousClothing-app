import { status } from "Constants/outfits";

const setLoading = () => ({
  type: status.LOADING
});

const setSuccess = payload => ({
  type: status.SUCCESS,
  payload: payload
});

const setFailed = payload => ({
  type: status.FAILED,
  payload: payload
});

export { setLoading, setSuccess, setFailed };
