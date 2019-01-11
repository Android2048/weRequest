import config from '../store/config'
import status from '../store/status'

export default () => {
    return {
        urlPerfix: config.urlPerfix,
        sessionExpireTime: status.sessionExpireTime,
        sessionExpireKey: config.sessionExpireKey,
        sessionExpire: status.sessionExpire
    }
};
