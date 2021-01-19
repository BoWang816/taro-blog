/**
 * index.jsx
 * @author wangbo
 * @since 2021/1/22
 */
import Taro from '@tarojs/taro';
import { setWxAppid, setWxOpenid } from '@constants';
import { miniWxAuthOpenId } from './wxAuth';

export const getAuth = () => {
    Taro.login({
        success({ code, errMsg }) {
            if (code && Taro.getExtConfig) {
                Taro.getExtConfig({
                    success({ extConfig }) {
                        setWxAppid(extConfig.extAppid); // 存储appid
                        console.log('返回的appId:', extConfig);

                        // 微信小程序登录
                        miniWxAuthOpenId(extConfig.extAppid, code).then(
                            data => {
                                setWxOpenid(data.openid);
                                console.log('openid:', data.openid);
                            },
                            error => {
                                console.error(error);
                            }
                        );
                    },
                });
            } else {
                console.log(`登录失败！${errMsg}`);
            }
        },
    });
};
