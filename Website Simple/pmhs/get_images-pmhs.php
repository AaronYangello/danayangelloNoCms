<?php
$dir = 'uploads-pmhs/';
$images = [];

// Open a directory, and read its contents
if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){
      if ($file != "." && $file != ".." && !is_dir($file)){
        $images[] = array(
          'path' => $dir . $file,
          'modificationTime' => filemtime($dir . $file)
        );
      }
    }
    closedir($dh);
  }
}

// Sort the images by modification time in descending order (newest first)
usort($images, function($a, $b) {
  return $b['modificationTime'] - $a['modificationTime'];
});

echo json_encode($images);
?>
