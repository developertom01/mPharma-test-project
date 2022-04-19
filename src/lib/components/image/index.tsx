import React from "react";
import { ImageSourceType } from "../../../res/types/components";

interface ImageProp extends Omit<React.ImgHTMLAttributes<HTMLImageElement>,"src"|"srcSet">{
    className?:string;
    src:ImageSourceType
}


const Image:React.FC<ImageProp> = ({className,src,...props}) => {
    return (
        <img className={className} src={src} {...props} />
            
    )
}

export default Image

