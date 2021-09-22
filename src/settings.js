import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "a54c4b9e159b479a86b5500611f60b44";
const token = "006a54c4b9e159b479a86b5500611f60b44IADhYFqRXVxueSDFbl4KNylwLLulj/fTLfOL8/7oX+DIBGTNKL8AAAAAEAAh3GK8zvVMYQEAAQCC50xh";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";