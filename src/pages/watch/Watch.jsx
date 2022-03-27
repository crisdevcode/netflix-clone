import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://rr5---sn-hv8pnu5gjv-javl.googlevideo.com/videoplayback?expire=1648330319&ei=7zE_YruHDZ64ir4PguaJgAg&ip=192.200.158.142&id=o-ABz7MjPuxktIKOOOSORsMk3ObfnL00MO9MxYvKM47M10&itag=18&source=youtube&requiressl=yes&spc=4ocVC7HHw6fpXhXYfid1R7wzNn8M&vprv=1&mime=video%2Fmp4&ns=SVcjTCHAXCccpYVibHLt0t8G&gir=yes&clen=8456106&ratebypass=yes&dur=138.251&lmt=1647549607132674&fexp=24001373,24007246&c=WEB&txp=5530434&n=de71XDdOPVhjAQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgbFASHy_WLNSRE2qnaLvde8o8ulGglJIzNiH-uGxNGiwCIQC_lqoGgxW4YOMSQMcggC2zx7dDfVBflg5zXzuWfgI2Zg%3D%3D&redirect_counter=1&rm=sn-q4fell7s&req_id=c80a6fa8b5e9a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=AH&mip=179.32.210.207&mm=31&mn=sn-hv8pnu5gjv-javl&ms=au&mt=1648307615&mv=u&mvi=5&pl=20&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOPAXIaxkMG49LFzGnnc04xGyLWs-GBXFxl0Hbw3_fb4AiAFVguBXdSHcmRLDnX87Ap37OvIxyjAGY_oeAaEfhq4xA%3D%3D"
      ></video>
    </div>
  );
};

export default Watch;
