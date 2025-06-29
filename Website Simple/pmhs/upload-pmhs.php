<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_FILES["images"]["name"])) {
        $targetDir = "uploads-pmhs/";
        $uploadedImages = [];

        foreach ($_FILES["images"]["tmp_name"] as $key => $tmp_name) {
            $targetFile = $targetDir . basename($_FILES["images"]["name"][$key]);
            $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

            $check = getimagesize($_FILES["images"]["tmp_name"][$key]);
            if ($check !== false) {
                if (!file_exists($targetFile)) {
                    if (move_uploaded_file($_FILES["images"]["tmp_name"][$key], $targetFile)) {
                        $uploadedImages[] = array(
                            'path' => $targetFile,
                            'uploadDate' => date("Y-m-d H:i:s")  // Current date and time
                        );
                    } else {
                        echo "Error uploading file.";
                        exit;
                    }
                } else {
                    echo "File already exists.";
                    exit;
                }
            } else {
                echo "File is not an image.";
                exit;
            }
        }

        echo json_encode($uploadedImages);
    } else {
        echo "No files uploaded.";
    }
} else {
    echo "Invalid request.";
}
?>
