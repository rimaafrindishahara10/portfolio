package com.cvdownload.service.impl;

import com.cvdownload.service.CvUpload;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class CvUploadImpl  implements CvUpload {

    @Value ("${file.upload.path}")
    private  String uploadFile;


    @Override
    public Boolean uploadCv(MultipartFile file) throws IOException {

        Path folderPath = Paths.get ( uploadFile );
        if (!Files.exists ( folderPath )){
            Files.createDirectories ( folderPath );
        }


        String originalFilename = file.getOriginalFilename ();

        String storePath = uploadFile.concat ( originalFilename );
        long upload = Files.copy ( file.getInputStream (), Paths.get ( storePath ) );
        if (upload != 0){
            return true;
        }

        return false;
    }

    @Override
    public byte[] downloadFile(String fileName) throws Exception {

        try {
            String fullPath = uploadFile.concat ( fileName );
            FileInputStream ios = new FileInputStream ( fullPath );
            return StreamUtils.copyToByteArray ( ios );
        }catch (FileNotFoundException e)
        {
            e.printStackTrace ();
            throw e;
        }catch (IOException e){
            e.printStackTrace ();
            throw  e;
        }

    }


}
