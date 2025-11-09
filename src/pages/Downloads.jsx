import { useState, useEffect } from 'react';
import SubPageHero from '../components/basic/SubPageHero';
import Mission from "../components/about/Mission";

import FinalCTA from "../components/home/FinalCTA";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FileDownloadGrid from "../components/downloads/FileDownloadGrid";
import downloadHeaderImg from "../assets/images/headerimg/jesse-orrico-5xWf-gE_45U-unsplash.jpg"
import { supabase } from '../lib/supabase';

function Downloads() {
  const [downloads, setDownloads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load downloadable PDFs from Supabase
  useEffect(() => {
    loadDownloads();
  }, []);

  const loadDownloads = async () => {
    try {
      setIsLoading(true);

      const { data, error } = await supabase
        .from('downloadable_pdfs_info')
        .select('*')
        .order('upload_date', { ascending: false });

      if (error) {
        console.error('Error loading downloads:', error);
        return;
      }

      // Transform data to match FileDownloadGrid format
      const formattedDownloads = data.map((item) => ({
        version: item.version,
        name: item.display_name,
        size: formatFileSize(item.file_size),
        type: item.file_type,
        date: item.upload_date.split('T')[0], // YYYY-MM-DD format
        url: supabase.storage.from('product_pdfs').getPublicUrl(item.storage_path).data.publicUrl,
        filename: item.display_name,
        storagePath: item.storage_path,
      }));

      setDownloads(formattedDownloads);
    } catch (error) {
      console.error('Error in loadDownloads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Format file size from bytes to human-readable format
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
  };

  return (
    <>
      <SubPageHero
        backgroundImage={downloadHeaderImg}
        title="Download all all the files you need"
        description="Get the files of our company you need to boost your business"
        showButtons={true}
      />

      {isLoading ? (
        <div className="py-20 text-center">
          <p className="text-xl">Loading files...</p>
        </div>
      ) : (
        <FileDownloadGrid downloads={downloads} />
      )}

      <WhyChooseUs />

    </>
  );
}

export default Downloads;
