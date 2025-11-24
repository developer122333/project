import React from 'react';
 import IMAGES_ASSETS from 'constants/imagesAssets';
  
const Preloader = ( ) => {
    return (


        <div id="preloader-active">
            <div className="preloader flex-1 content-center">
                <div className=" inset-y-2/4 jump">
                    <img
                        src={IMAGES_ASSETS.logo} className="h-28 w-auto" alt=""
                         

                    />

                </div>
            </div>
        </div>

    );
};

export default Preloader;
