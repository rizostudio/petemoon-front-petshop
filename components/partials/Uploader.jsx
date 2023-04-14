import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
//media
import file_Icon from "../../assets/common/filePDFIcon.svg";
import upload_Icon from "../../assets/common/uploadIcon3.svg";
import tick_Icon from "../../assets/common/tickIcon3.png";
import close_Icon from "../../assets/common/closeIcon3.svg";
import progressBar from "../../assets/common/progressBar.svg";

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;

const FileUpload = ({
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  const [progress, setProgress] = useState(0);

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
    }
    setProgress(100);
  };

  const downloadHandler = (file) => {
    fetch(file).then(() => {
      const fileURL = window.URL.createObjectURL(file);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = file.name;
      alink.click();
    });
  };
  const fileBool = Object.keys(files) ? true : false;
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-between relative w-full h-[200px] py-5 px-10 bg-[#EA63520D] border-[1px] border-dashed border-primary  rounded-[10px]">
        <div className="flex flex-col items-center">
          <Image src={upload_Icon} alt="Upload Icon" />
          <p className="text-sm text-center text-primary font-medium leading-6 mt-2.5">
            <bdi>با کلیلک بر این قسمت فایل را انتخاب و بار گزاری نمایید</bdi>
          </p>
        </div>
        <button
          className="text-base text-center text-white font-medium leading-6 py-2 px-10 bg-primary  rounded-[10px] "
          type="button"
          onClick={handleUploadBtnClick}
        >
          <bdi>انتخاب فایل</bdi>
        </button>
        <input
          className="absolute text-[0px] border-none bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-none"
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </div>
      {/* progress */}
      <div className="progress my-10">
        <div
          className="progress-bar progress-bar-info progress-bar-striped"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: progress + "%" }}
        >
          <p className="my-10 text-black text-3xl">{progress}%</p>
        </div>
      </div>
      {/* for show */}
      <div className="flex flex-row-reverse justify-between items-center w-full">
        {fileBool ? (
          <div className="flex flex-row-reverse items-center">
            <div className="w-[35px] h-[45px] mr-5">
              <Image
                src={file_Icon}
                alt="File Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-2.5">
              {Object.keys(files).map((fileName, index) => (
                <div className="flex flex-col items-end mr-2">
                  <div className="flex flex-row-reverse justify-between items-center w-full">
                    <p className="text-sm text-black font-medium leading-6">
                      {files[fileName].name}
                    </p>
                    {!fileBool ? (
                      <p className="text-sm text-[#006CEC] font-semibold leading-6 after:content-['%'] after:text-xs">
                        75
                      </p>
                    ) : null}
                  </div>
                  {fileBool ? (
                    <p className="text-xs text-gray-400 font-normal leading-6">
                      {files[fileName].size}B
                    </p>
                  ) : null}
                  <Image src={progressBar} alt="progressBar" className="mt-2" />
                </div>
              ))}
            </div>
            <Image src={tick_Icon} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FileUpload;
