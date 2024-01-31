import React from 'react';
import AWS from 'aws-sdk';
const S3uploader = () => {
    const config={
        bucketName:"awsbucket018",
        dirName:"userprofiles",
        region:"ap-south-1",
        accessKeyID:"AKIAZCVKLLX6SJJN7PGP",
        secretAccessKey: "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"
    }
    const handleFileUpload=(event)=>{
        const file=event.target.files[0];
        // console.log(file);
        if(!config.bucketName||!config.region||!config.accessKeyID||!config.secretAccessKey){
            console.error("AWS config is complete");
            return;
        }
        AWS.config.update({
            accessKeyId:config.accessKeyID,
            secretAccessKey: config.secretAccessKey,
            region:config.region
        })
        //creating new instance
        const S3=new AWS.S3();
        const reader=new FileReader();
        reader.onload=()=>{
            const filebuffer=reader.result;
            S3.upload({
                Bucket:config.bucketName, 
                Key:`${config.dirName}/${file.name}`, 
                Body: filebuffer, 
                ACL:'public-read',  
                ContentType: file.type
            },(err,uploadData)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(uploadData);
                }
             })
        }
        reader.readAsArrayBuffer(file);
        };
    
    return (
        <div>
            <input type="file"  name='file to be uploaded' onChange={handleFileUpload}/>
        </div>
    );
};

export default S3uploader;

