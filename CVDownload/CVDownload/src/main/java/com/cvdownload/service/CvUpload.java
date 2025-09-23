package com.cvdownload.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;

public interface CvUpload {

    Boolean uploadCv(MultipartFile file) throws IOException;

    byte [] downloadFile(String fileName) throws Exception;
}
