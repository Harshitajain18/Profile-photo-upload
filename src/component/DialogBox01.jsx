// import "./DialogBox01.css";
// import React, { useState, useRef } from "react";
// import { AiTwotoneDelete, AiTwotoneCloseCircle } from "react-icons/ai";
// import { FaCamera } from "react-icons/fa";
// import { MdOutlineFileUpload } from "react-icons/md";
// import CustomWebcam from "../component/CustomWebcam";

// function DialogBox01() {
//   const [ShowCamera, setShowCamera] = useState(false);
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const fileUploadRef = useRef(null);
//   const dialogElement = useRef();
//   let dialogBoxId = document.getElementById("dialogBox");

//   function showDialog() {
//     console.log(dialogElement.current);
//     dialogElement.current.showModal();
//   }

//   function closeDialog() {
//     dialogElement.current.close();
//     setShowCamera(false);
//   }

//   const OpenCamera = () => {
//     setShowCamera(true);
//   };

//   const handleImageUpload = (event) => {
//     event.preventDefault();
//     fileUploadRef.current.click();
//   };

//   const uploadImageDisplay = (e) => {
//     /* e.target.files[0] gets the first file the user selected (since the input may allow multiple files). 
//     The selected file is stored in the file variable.
//     If the user doesn't select any files, this value will be undefined */
//     const file = e.target.files[0];

//     if (file) {
//       /* A new "FileReader" object is created and stored in the reader variable. 
//     This is a built-in JavaScript API that reads files (like images, text files, etc.) 
//     from the user's device. */

//       const reader = new FileReader();

//       /* This uses destructuring to extract the current property from the fileUploadRef reference.
//        current points to the DOM element (likely an <img> element) 
//        where the uploaded image will be displayed.
//       */
//       const { current } = fileUploadRef;

//       current.file = file;
//       reader.onload = (e) => {
//         /* Once the file is read, e.target.result contains the file's data in a format called a data URL 
//       (which can be displayed as an image). This line sets the src attribute of the current element
//       (the image) to this data URL, making the image appear on the screen. */
//         current.src = e.target.result;

//         setProfilePhoto(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const DeletePhoto = () => {
//     setProfilePhoto(null);
//   };

//   return (
//     <div>
//       <h1 className="heading">PROFILE PHOTO UPLOAD</h1>
//       <div>
//         {profilePhoto ? (
//           <img
//             src={profilePhoto}
//             alt=""
//             onClick={showDialog}
//             className="profile-image"
//           />
//         ) : (
//           <button className="AddPhotoBtn" onClick={showDialog}>
//             Add Photo
//           </button>
//         )}
//       </div>
//       <dialog ref={dialogElement} id="dialogBox">
//           <div className="dialog-section__header">
//             <h2 className="dialog-section__title">Profile Photo</h2>
//             <button onClick={closeDialog} className="dialog-section__close">
//               <AiTwotoneCloseCircle size={25} />
//             </button>
//           </div>
//           <div className="dialog-section__middle">
//             {profilePhoto ? (
//               <img src={profilePhoto} alt="" className="profile-image" />
//             ) : (
//               <div className="dialog-section__image">
//                 No profile photo uploaded
//               </div>
//             )}
//           </div>
//           <div className="profile-upload__actions">
//             <div className="profile-upload__actions__left">
//               <button className="upload" onClick={handleImageUpload}>
//                 <MdOutlineFileUpload size={25} />
//               </button>
//               <input
//                 style={{ display: "none" }}
//                 id="profile-upload"
//                 ref={fileUploadRef}
//                 onChange={uploadImageDisplay}
//                 type="file"
//                 accept="image/*"
//               />
//               <button className="camera" onClick={OpenCamera}>
//                 <FaCamera size={25} />
//               </button>
//             </div>
//             <button className="delbtn" onClick={DeletePhoto}>
//               <AiTwotoneDelete size={25} />
//             </button>
//           </div>
//       </dialog>
//       {ShowCamera && <CustomWebcam setShowCamera={setShowCamera} />}
//     </div>
//   );
// }

// export default DialogBox01;
