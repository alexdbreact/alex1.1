"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const Form = () => {

 

  const [tit, setTit] = useState("");
  const [summ, setSumm] = useState("");
  const [start, setStart] = useState("");
  const [tash, setTash] = useState("");
  const [start2, setStart2] = useState("");
  const [tash2, setTash2] = useState("");
  const [start3, setStart3] = useState("");
  const [tash3, setTash3] = useState("");
    const [image, setImage] = useState("");
  const [refer, setRefer] = useState("");
 // const [images, setImages] = useState([]);
 const [files, setFiles] = useState({});



  const [isDisabled, setIsDisabled] = useState(false);



  
  const router = useRouter();

 
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
  
    if (!tit || !start || !tash) {
      alert("يجب ادخال العنوان و تأشيرة و جهة واحده علي الاقل");
      return;
    }
  
    try {
      const res = await fetch("/api/mains", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ tit, summ, start, tash, start2, tash2, start3, tash3, image, files, refer }),
      });
  
      if (res.ok) {
        router.push("/dashboard/allSending");
        alert("تم ارسال المستند / التأشيرة بنجاح .. شكراً لسيادتكم");
      } else {
        throw new Error("Failed to create a item");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // multi images 
  
    

  const convertsToBase64 = (e) => {
    const file = e.target.files[0];
  
    if (file.size > 1 * 1024 * 1024) {
      alert(`حجم الملف ${file.name} كبير للغاية .. برجاء اختيار ملف آخر`);
      return;
    }
  
    if (!file.type.startsWith("image/") && file.type !== "application/pdf") {
      alert(`نوع الملف ${file.name} غير مدعوم .. برجاء اختيار صورة أو ملف PDF`);
      return;
    }
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onload = () => {
      setFiles({
        name: file.name,
        type: file.type,
        base64: reader.result,
      });
    };
  
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };


  // Convert file to Base64
  const convertToBase64 = (e) => {
    const file = e.target.files[0];
    if (!file || file.size > 1 * 1024 * 1024) {
      alert("حجم الصورة كبير للغاية .. برج اختار صورة اخري"); // Alert the user
      return; // Exit the function
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };

  

  return (
    <form
      name="new"
      id="new"
      autoComplete="on"
      className="mx-auto mt-2 max-w-xl sm:mt-10"
      onSubmit={handleSubmit}
    >
      <div  dir="rtl" className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-1 m-2">

                {/* Mobile Number */}
                <div className="sm:col-span-2">
          <label htmlFor="tit" className="block text-sm font-semibold">
عنوان الموضوع /المستند          </label>
          <input
            type="text"
            id="tit"
            name="tit"
            value={tit}
            onChange={(e) => setTit(e.target.value)}
            className="block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        
        {/* Description Text Area */}
        <div className="sm:col-span-2">
          <textarea
            value={summ}
            onChange={(e) => setSumm(e.target.value)}
            placeholder="ملخص / وصف الموضوع "
            rows={2}
            className="block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        {/* Select Place */}
        <div className="sm:col-span-2">
          <select
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          >
            <option value=""> ** الجهة الرئيسية الصادر إليها</option>
            <option value="hr">الإدارة العامة للموارد البشرية</option>
            <option value="legal">الإدارة العامة للشئون القانونية </option>
            <option value="finance">الإدارة العامة للشئون المالية</option>
            <option value="admin">الإدارة العامة للشئون الإدارية</option>
            <option value="PR">الإدارة العامة للعلاقات العامة</option>
            <option value="Govern">الإدارة العامة للحوكمة </option>
            <option value="auth">مركز السيطرة</option>
            <option value="info">مركز المعلومات</option>
            <option value="smart">المركز الذكى</option>
            
          </select>
        </div>
           {/* Description Text Area */}
           <div className="sm:col-span-2">
          <textarea
            value={tash}
            onChange={(e) => setTash(e.target.value)}
            placeholder=" التأشيرة الصادرة  "
            rows={2}
            className="block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        {/* Select Violation Type */}
        <div className="sm:col-span-2">
          <select
            value={start2}
            onChange={(e) => setStart2(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          >
           
            <option value="">   *إضافة جهة آخري</option>
            <option value="hr">الإدارة العامة للموارد البشرية</option>
            <option value="legal">الإدارة العامة للشئون القانونية </option>
            <option value="finance">الإدارة العامة للشئون المالية</option>
            <option value="admin">الإدارة العامة للشئون الإدارية</option>
            <option value="PR">الإدارة العامة للعلاقات العامة</option>
            <option value="Govern">الإدارة العامة للحوكمة </option>
            <option value="auth">مركز السيطرة</option>
            <option value="info">مركز المعلومات</option>
            <option value="smart">المركز الذكى</option>
          </select>
        </div>
           {/* Mobile Number */}
           <div className="sm:col-span-2">
          <label htmlFor="tash2" className="block text-sm font-semibold">
تأشيرة اخري         </label>
          <input
            type="tel"
            id="tash2"
            name="tash2"
            value={tash2}
            onChange={(e) => setTash2(e.target.value)}
            className="block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        {/* Select Violation Type */}
        <div className="sm:col-span-2">
          <select
            value={start3}
            onChange={(e) => setStart3(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          >
           
            <option value="">   *إضافة جهة آخري</option>
            <option value="hr">الإدارة العامة للموارد البشرية</option>
            <option value="legal">الإدارة العامة للشئون القانونية </option>
            <option value="finance">الإدارة العامة للشئون المالية</option>
            <option value="admin">الإدارة العامة للشئون الإدارية</option>
            <option value="PR">الإدارة العامة للعلاقات العامة</option>
            <option value="Govern">الإدارة العامة للحوكمة </option>
            <option value="auth">مركز السيطرة</option>
            <option value="info">مركز المعلومات</option>
            <option value="smart">المركز الذكى</option>
          </select>
        </div>
           {/* Mobile Number */}
           <div className="sm:col-span-2">
           <label htmlFor="tash3" className="block text-sm font-semibold">
           تأشيرة اخري         </label>
          <input
            type="text"
            id="tash3"
            name="tash3"
            value={tash3}
            onChange={(e) => setTash3(e.target.value)}
            className="block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        {/* File Upload */}
        <div className="bg-blue-100 p-2 rounded-lg text-right sm:col-span-2 ">
        <label htmlFor="image" className="block text-sm font-semibold">
تحميل المستند /التأشيرة        </label>
          <input
            type="file"
             id="image"
            name="image"
            accept="image/*"
            className="bg-transparent "
            onChange={convertToBase64}
          />
          {image && <img src={image} alt="Preview" width={200} height={200} priority="true"  />}
        </div>
{/*multi images  */}
{/*

<div className="bg-blue-300 p-2 rounded-lg text-right sm:col-span-2 ">
<label htmlFor="images" className="block text-sm font-semibold">
مستندات متعددة        </label>
<input
        type="file"
        multiple
        onChange={convertsToBase64}
        accept="image/*"
      />
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`uploaded-preview-${index}`}
            style={{ width: "100px", height: "100px", margin: "5px" }}
          />
        ))}
      </div>
    </div>

*/}

<div className="bg-blue-200 p-2 rounded-lg text-right sm:col-span-2 ">
<label  className="block text-sm font-semibold">
تحميل المستند /التأشيرة (PDF)</label>
      <input
        type="file"
        multiple
        onChange={convertsToBase64}
        accept="application/pdf"
      />
      <div>
        
            { files.type === "application/pdf" ? (
              <embed
                src={files.base64}
                type="application/pdf"
                width="300px"
                height="400px"
              />
            ) : null}
            <p>{files.name}</p>
         
      </div>
    </div>





      


        {/* Mobile Number */}
        <div className="sm:col-span-2">
          <label htmlFor="refer" className="block text-sm font-semibold">
           رقم مرجعي
          </label>
          <input
            type="tel"
            id="refer"
            name="refer"
            placeholder="(2502231235-1)الرقم+التاريخ+الوقت"
          
            value={refer}
            onChange={(e) => setRefer(e.target.value )}
            className="block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 m-auto">
          <button
            type="submit"
            disabled={isDisabled}
            className="inline-block m-4 mb-8 rounded bg-blue-500 px-12 py-2 text-white focus:outline-none"
          >
              
              {isDisabled  ? 'جاري الإرسال...' : 'ارسل المستند'}

          </button>
        </div>
      </div>
    </form>
    
  );
};

export default Form;
