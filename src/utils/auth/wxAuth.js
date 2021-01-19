/**
 * wxAuth.js
 * @author wangbo
 * @since 2021/1/22
 */
import { resource } from '@common/http';
import { apiPrefix } from '@constants';

// 微信小程序登录获取openId 和sessionKey
export const miniWxAuthOpenId = (appId, jscode) =>
    resource.get(`${apiPrefix}/weixin/miniapp/jscode2Session`, {
        params: { appId, jscode },
        forceUpdate: true,
    });

// 获取用户信息
export const getUserInfo = (appId, openId, encryptedData) =>
    resource.get(`${apiPrefix}/user`, {
        params: { appId, openId, encryptedData },
        forceUpdate: true,
    });
