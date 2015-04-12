<?php 
$zipFile = "./testZip.zip";
$zipArchive = new ZipArchive();

if (!$zipArchive->open($zipFile, ZIPARCHIVE::OVERWRITE))
    die("Failed to create archive\n");

$zipArchive->addGlob("basesource/*");
if (!$zipArchive->status == ZIPARCHIVE::ER_OK)
    echo "Failed to write files to zip\n";

$zipArchive->close();
?>