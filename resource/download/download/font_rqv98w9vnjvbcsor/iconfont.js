;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-baketb" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M353.024 831.808c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64S388.416 831.808 353.024 831.808L353.024 831.808zM801.024 831.808c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64S836.416 831.808 801.024 831.808L801.024 831.808zM937.312 188.48C920.96 170.016 898.496 160 874.048 160L232.864 160 230.592 146.976C224.992 100.416 184 64 137.28 64L97.024 64c-17.696 0-32 14.304-32 32s14.304 32 32 32L137.28 128c13.92 0 28.128 12.672 30.016 28.256l30.912 178.496L252.48 716.864C258.112 763.424 298.656 800 344.768 800l520.256 0c17.696 0 32-14.304 32-32s-14.304-32-32-32L344.768 736c-13.632 0-27.04-12.608-28.832-27.456l-5.312-37.344 507.712-31.392c46.08 0 86.624-36.512 92.064-81.376l50.432-288.352C964.576 239.264 956 209.568 937.312 188.48z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shopping_cart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25T640 854t26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 10-6 20l-152 276q-24 44-74 44H346L308 624l-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106L128 170H42v-84z m256 682q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60T298 768z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-remove_circle_outline" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M512 854q140 0 241-101T854 512t-101-241T512 170t-241 101T170 512t101 241T512 854z m0-768q176 0 301 125T938 512t-125 301T512 938t-301-125T86 512t125-301T512 86z m-214 384h428v84h-428v-84z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-thumb_up" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M982 426l-2 4h2V512q0 16-6 32l-130 300q-20 52-78 52H384q-34 0-60-26t-26-60V384q0-34 26-60L604 42 650 88Q668 106 668 132v14l-42 196H896q34 0 60 25t26 59zM42 896V384h172v512h-172z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-thumb_down" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M810 128h172v512h-172V128zM640 128q34 0 60 26t26 60V640q0 34-26 60L420 982 374 936Q356 918 356 892v-14l42-196H128q-34 0-60-25T42 598l2-4h-2V512q0-16 6-32l130-300q20-52 78-52h384z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow_lift" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M246.784 468.309333L689.834667 25.6c24.917333-24.917333 62.464-24.917333 87.381333 0s24.917333 62.464 0 87.381333l-399.36 399.36 399.36 399.36c24.917333 24.917333 24.917333 62.464 0 87.381334-24.917333 24.917333-62.464 24.917333-87.381333 0L246.784 555.690667c-24.917333-24.917333-24.917333-62.464 0-87.381334z" fill="#393A3A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add_circle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125T938 512t-125 301T512 938t-301-125T86 512t125-301T512 86z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M810 274L572 512l238 238-60 60L512 572 274 810l-60-60L452 512 214 274l60-60L512 452l238-238z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-favorite" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M512 910l-62-56c-220-200-364-330-364-492C86 230 188 128 320 128c74 0 146 36 192 90C558 164 630 128 704 128c132 0 234 102 234 234 0 162-144 294-364 494z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-check_circle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M426 726l384-384-60-62-324 324-152-152-60 60z m86-640q176 0 301 125T938 512t-125 301T512 938t-301-125T86 512t125-301T512 86z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-keyboard_arrow_right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M366 698l196-196-196-196 60-60 256 256-256 256z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)