import './index.scss'
import { getImg } from "@/common/utils";

const ButtonComponent = () => {
  const handleClick = () => {
    // window.location.href = 'https://www.endata.com.cn/tencent2023/2023%E8%85%BE%E8%AE%AF%E5%A8%B1%E4%B9%90%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf'
    window.location.href = 'https://h5.news.qq.com/sv1/whitepaper/2024/paper.pdf'
  }
  return (
    <div className="button-component" onClick={handleClick}>
      <div className="button-inner">
        <img src={getImg("download_btn.png")} className='w-full h-full' alt="" />
      </div>
    </div>
  );
};

export default ButtonComponent;
