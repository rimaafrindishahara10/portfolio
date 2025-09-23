package com.cvdownload.controller;

import com.cvdownload.service.impl.CvUploadImpl;
import com.sun.net.httpserver.Headers;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.FileNotFoundException;
import java.io.IOException;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequiredArgsConstructor
public class CvUpload {

    private final CvUploadImpl cvUpload;

    @PostMapping ("/upload")
    public ResponseEntity<?> uploadCv(@RequestParam MultipartFile file) {

        try{
            Boolean uploadFile = cvUpload.uploadCv ( file );

            if (uploadFile){
                return new  ResponseEntity<>("Upload Success", HttpStatus.CREATED);
            }
            else {
                return new  ResponseEntity<>("Not Upload", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        catch (Exception e){
            return new  ResponseEntity<>(e.getMessage (), HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }
    @GetMapping("/download")
    public ResponseEntity<?> downloadFile(@RequestParam String fileName) throws Exception {

        try{
            byte[] downloadFile = cvUpload.downloadFile ( fileName );

            String contentType = getContentType ( fileName );

            HttpHeaders headers = new HttpHeaders ();
            headers.setContentType ( MediaType.parseMediaType ( contentType ));
            headers.setContentLength ( fileName.length () );
            headers.setContentDispositionFormData ( "attachment",fileName );
            return ResponseEntity.ok ().headers ( headers ).body ( downloadFile );


        }catch (FileNotFoundException e){
            return new ResponseEntity<> ( "File Not Found",HttpStatus.NOT_FOUND );

        }catch (IOException e){
            return new ResponseEntity<> (e.getMessage () ,HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    public String getContentType(String filName) {

        String extension = FilenameUtils.getExtension ( filName );

        switch (extension){
            case "pdf":
                return "application/pdf";
            case "png":
                return "image.png";
            default:
                return "application/octet-stream";
        }
    }

}
