;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weixin" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M351.5501 365.3473c16.6874 0 27.8862-11.3453 27.8862-28.2458 0-16.9795-11.1989-28.1739-27.8862-28.1739-16.6804 0-33.5176 11.1944-33.5176 28.1739C318.0324 354.002 334.8697 365.3473 351.5501 365.3473zM507.4328 308.9265c-16.6874 0-33.4467 11.1944-33.4467 28.1739 0 16.9015 16.7593 28.2458 33.4467 28.2458 16.8233 0 27.9512-11.3453 27.9512-28.2458C535.384 320.122 524.256 308.9265 507.4328 308.9265zM702.3866 517.7789c16.7593 0 27.9502-11.1994 27.9502-22.5407 0-11.2694-11.1909-22.6147-27.9502-22.6147-10.977 0-22.034 11.3453-22.034 22.6147C680.3536 506.5795 691.4096 517.7789 702.3866 517.7789zM579.8796 517.7789c16.9012 0 27.8782-11.1994 27.8782-22.5407 0-11.2694-10.977-22.6147-27.8782-22.6147-11.05 0-22.2478 11.3453-22.2478 22.6147C557.6318 506.5795 568.8297 517.7789 579.8796 517.7789zM76.7541 483.6761c0 242.5146 196.5688 439.0743 439.0903 439.0743 242.5215 0 439.0903-196.5597 439.0903-439.0743S758.3659 44.6048 515.8444 44.6048C273.3229 44.6048 76.7541 241.1615 76.7541 483.6761zM627.2255 370.1031c-105.8206 0-189.3934 80.0567-189.3934 178.6299 0 16.4658 2.5654 32.2731 6.8826 47.3449-6.8826 0.5856-13.7642 0.8784-20.7828 0.8784-27.8153 0-50.205-5.7061-78.0133-11.3413l-77.8704 39.5902 22.2478-67.911c-55.7655-39.5152-89.1322-90.3767-89.1322-152.3597 0-107.4242 100.3321-192.0178 222.7681-192.0178 109.5512 0 205.4951 67.6152 224.7338 158.5055C641.6473 370.6177 634.4718 370.1031 627.2255 370.1031zM830.526 546.0957c0 50.8605-33.2958 95.94-78.0133 129.8909l16.7593 56.4957-61.1041-33.881c-22.3268 5.6352-44.6386 11.2694-66.8214 11.2694-105.9625 0-189.5363-73.3992-189.5363-163.776 0-90.3008 83.5738-163.8439 189.5363-163.8439C741.3857 382.2518 830.526 455.795 830.526 546.0957z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangchengxitongtubiaozitihuayuanwenjian68" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M255.104 750.848c-40.256 0-73.088 33.664-73.088 75.136 0 41.472 32.832 75.328 73.088 75.328s73.088-33.792 73.088-75.328C328.192 784.576 295.36 750.848 255.104 750.848zM255.104 876.096c-26.432 0-47.936-22.464-47.936-50.112 0-27.584 21.504-50.048 47.936-50.048 26.368 0 47.872 22.528 47.872 50.048C302.976 853.696 281.472 876.096 255.104 876.096z"  ></path>' +
    '' +
    '<path d="M688.512 750.848c-40.256 0-73.024 33.664-73.024 75.136 0 41.472 32.768 75.328 73.024 75.328 40.32 0 73.088-33.792 73.088-75.328C761.536 784.576 728.832 750.848 688.512 750.848zM688.512 876.096c-26.432 0-47.872-22.464-47.872-50.112 0-27.584 21.44-50.048 47.872-50.048 26.368 0 47.936 22.528 47.936 50.048C736.448 853.696 714.88 876.096 688.512 876.096z"  ></path>' +
    '' +
    '<path d="M947.456 122.688l-94.272 0c-1.088 0-1.984 0.384-2.88 0.576-1.024-0.192-1.984-0.576-2.944-0.576-21.44 0-38.72 17.344-38.656 37.504l-52.352 521.856c0 7.488-6.144 13.696-13.696 13.696L197.824 695.744c-18.816 0-34.112-15.296-34.112-34.176 0-18.816 15.296-34.112 34.112-34.112 0.448 0 0.704-0.192 1.152-0.192 0.384 0 0.832 0.192 1.216 0.192l427.968 0c32.704 0 59.264-26.56 59.264-59.264 0-30.976-24.32-52.608-59.264-52.608L163.776 515.136c-18.816 0-34.176-15.296-34.176-34.048 0-18.944 15.36-34.24 34.112-34.24l493.568 1.728c33.792 0 61.312-25.664 61.312-57.28 0-31.744-24.896-54.784-59.264-54.784L123.264 336.384c-18.816 0-34.112-15.296-34.112-34.112 0-18.88 15.296-34.112 34.112-34.112l595.264 0c6.912 0 12.48-5.632 12.48-12.608 0-6.848-5.568-12.544-12.48-12.544L123.264 243.008C90.624 242.944 64 269.632 64 302.272c0 32.704 26.624 59.264 59.264 59.264l536.064 0.128c16.512 0 34.112 9.344 34.112 29.696 0 17.664-16.192 32.128-36.096 32.128L163.776 421.76c-32.768 0-59.328 26.624-59.328 59.328s26.56 59.264 59.328 59.264l464.32 0.384c16.512 0 34.112 7.232 34.112 27.52 0 18.816-15.296 34.048-34.112 34.048L200.128 602.304c-0.384 0-0.832 0.256-1.216 0.256-0.448 0-0.704-0.256-1.152-0.256-32.704 0-59.328 26.688-59.328 59.328 0 32.704 26.624 59.392 59.328 59.392l544.832 0c21.376 0 38.784-17.408 38.72-37.568l52.352-521.856c0-7.552 6.144-13.696 13.632-13.696 0.96 0 1.92-0.32 2.944-0.576C851.2 147.52 852.096 147.84 853.184 147.84l94.272 0C954.368 147.84 960 142.272 960 135.232 960 128.32 954.368 122.688 947.456 122.688z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-meun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M62.95126 107.46557 62.95126 248.349251l892.295096 0L955.246356 107.46557 62.95126 107.46557zM62.95126 577.076134l892.295096 0L955.246356 436.1945 62.95126 436.1945 62.95126 577.076134zM62.95126 905.801994l892.295096 0L955.246356 764.92036 62.95126 764.92036 62.95126 905.801994z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M395.268392 768.714779c-26.193569 0-47.411823 21.219277-47.411823 47.415916 0 26.192545 21.218254 47.410799 47.411823 47.410799 26.195615 0 47.410799-21.218254 47.410799-47.410799C442.679192 789.93508 421.464007 768.714779 395.268392 768.714779L395.268392 768.714779 395.268392 768.714779zM727.153198 768.714779c-26.195615 0-47.414893 21.219277-47.414893 47.415916 0 26.192545 21.218254 47.410799 47.414893 47.410799 26.192545 0 47.410799-21.218254 47.410799-47.410799C774.563998 789.93508 753.34472 768.714779 727.153198 768.714779L727.153198 768.714779 727.153198 768.714779zM774.184351 745.011938 389.129578 745.011938c-34.161031 0-64.196091-27.024493-68.369134-61.519122l-40.205701-283.048541-22.874987-132.278699c-1.422396-11.541871-11.948123-20.979824-22.23542-20.979824l-30.199813 0c-13.087063 0-23.707958-10.620895-23.707958-23.702841 0-13.087063 10.620895-23.707958 23.707958-23.707958l30.199813 0c34.58775 0 64.954361 27.024493 69.15094 61.519122l22.827915 131.779326 40.372499 284.257066c1.327228 11.000542 11.281951 20.271696 21.333888 20.271696l385.05375 0c13.108552 0 23.707958 10.594289 23.707958 23.702841S787.292903 745.011938 774.184351 745.011938L774.184351 745.011938zM418.762479 650.185222c-12.302187 0-22.709211-9.480932-23.613814-21.974477-0.969071-13.06148 8.843412-24.416086 21.880333-25.364691l321.597509-23.706935c11.802814-0.068562 21.76163-9.339716 23.063275-19.887956l37.33635-213.637682c0.948605-7.964392-1.254573-16.689101-6.019087-22.093181-3.060709-3.461845-6.901177-5.215792-11.380188-5.215792L371.184881 318.30451c-13.087063 0-23.707958-10.619872-23.707958-23.707958 0-13.08297 10.620895-23.702841 23.707958-23.702841l410.444023 0c18.111496 0 34.750455 7.513114 46.864354 21.193695 13.847379 15.622816 20.199041 37.644365 17.424858 60.47228l-37.358863 213.663264c-4.028757 33.234939-34.042327 60.259432-68.202335 60.259432l-319.839469 23.63428C419.923932 650.164756 419.330414 650.185222 418.762479 650.185222L418.762479 650.185222zM418.762479 650.185222"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M408.241868 791.913131c-33.167401 0-60.288085-27.04496-60.288085-60.251246 0-33.242102 27.119661-60.334133 60.288085-60.334133 33.262568 0 60.306504 27.092032 60.306504 60.334133C468.548372 764.869195 441.504436 791.913131 408.241868 791.913131zM408.241868 688.620603c-23.749914 0-42.996257 19.311835-42.996257 43.042305 0 23.760147 19.24532 43.034119 42.996257 43.034119 23.769356 0 43.10882-19.273972 43.10882-43.034119C451.350688 707.931415 432.011224 688.620603 408.241868 688.620603z"  ></path>' +
    '' +
    '<path d="M615.015212 791.913131c-33.261545 0-60.288085-27.04496-60.288085-60.251246 0-33.242102 27.02654-60.334133 60.288085-60.334133 33.243125 0 60.288085 27.092032 60.288085 60.334133C675.302273 764.869195 648.258337 791.913131 615.015212 791.913131zM615.015212 688.620603c-23.749914 0-43.089377 19.311835-43.089377 43.042305 0 23.760147 19.339464 43.034119 43.089377 43.034119 23.768333 0 43.014676-19.273972 43.014676-43.034119C658.029888 707.931415 638.783545 688.620603 615.015212 688.620603z"  ></path>' +
    '' +
    '<path d="M459.930087 723.016994l103.395882 0 0 17.282618-103.395882 0 0-17.282618Z"  ></path>' +
    '' +
    '<path d="M348.029508 732.305545 314.116117 266.541589 235.960083 266.541589 235.960083 249.371534 330.178955 249.371534 365.152491 731.029482Z"  ></path>' +
    '' +
    '<path d="M348.625072 619.686604 347.377662 602.49813 711.448518 577.146743 767.790734 335.474564 330.73768 335.474564 330.73768 318.239018 789.511431 318.239018 725.278501 593.452103Z"  ></path>' +
    '' +
    '<path d="M512.773619 968.579783c-246.975974 0-447.942055-200.983477-447.942055-447.885773 0-246.986207 200.965058-447.979918 447.942055-447.979918 246.902296 0 447.867354 200.99371 447.867354 447.979918C960.640973 767.596306 759.675916 968.579783 512.773619 968.579783zM512.773619 89.969081c-237.503229 0-430.650227 193.21249-430.650227 430.724928 0 237.418294 193.148022 430.649204 430.650227 430.649204 237.427504 0 430.687066-193.231933 430.687066-430.649204C943.460686 283.181571 750.201124 89.969081 512.773619 89.969081z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M181.812347 377.094474c-8.521071 9.019421-118.253264 119.386064-118.253264 213.530235s92.328825 96.191806 109.386316 98.920964c79.137385-6.139837 779.062452-300.852022 781.805936-309.038472s1.802042-16.074094-17.736966-10.915607c-19.10001 17.055444-682.204473 180.101891-682.204473 180.101891s-85.275175 12.279674-92.097558-73.678046c0.682545-67.538209 19.101033-69.584821 32.063253-89.3684C194.621071 372.319727 194.983321 376.324948 181.812347 377.094474z"  ></path>' +
    '' +
    '<path d="M63.559083 590.623685c0 94.14417 90.796936 95.511307 109.386316 98.920964s779.062452-300.852022 781.805936-309.038472"  ></path>' +
    '' +
    '<path d="M172.944376 689.544649c89.197508 0.339738 779.062452-300.852022 781.805936-309.038472"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M411.270737 607.649684c-17.973895-7.504842-41.189053 0.229053-52.264421 17.542737-11.223579 17.394526-5.955368 38.103579 11.870316 46.201263 18.108632 8.232421 42.132211 0.417684 53.342316-17.421474C435.253895 635.944421 429.446737 615.370105 411.270737 607.649684z"  ></path>' +
    '' +
    '<path d="M455.545263 589.352421c-6.885053-2.721684-15.508211 0.579368-19.550316 7.329684-3.920842 6.790737-1.751579 14.524632 5.146947 17.367579 7.019789 2.883368 16.006737-0.458105 20.048842-7.370105C465.071158 599.740632 462.551579 591.912421 455.545263 589.352421z"  ></path>' +
    '' +
    '<path d="M427.52 469.315368c-115.968 11.439158-203.924211 82.216421-196.378947 158.073263 7.531789 75.910737 107.654737 128.161684 223.649684 116.749474 115.994947-11.439158 203.924211-82.216421 196.392421-158.140632C643.664842 510.140632 543.541895 457.889684 427.52 469.315368zM529.300211 648.299789c-23.673263 53.355789-91.769263 81.798737-149.530947 63.232-55.754105-17.933474-79.373474-72.811789-54.945684-122.246737 23.956211-48.464842 86.352842-75.870316 141.541053-61.561263C523.506526 542.437053 552.663579 596.143158 529.300211 648.299789z"  ></path>' +
    '' +
    '<path d="M512 0C229.241263 0 0 229.227789 0 512c0 282.758737 229.241263 512 512 512 282.772211 0 512-229.241263 512-512C1024 229.227789 794.772211 0 512 0zM455.531789 794.974316c-145.354105 0-293.941895-70.197895-293.941895-185.667368 0-60.362105 38.386526-130.182737 104.474947-196.069053 88.252632-87.929263 191.164632-127.986526 229.874526-89.397895 17.084632 17.003789 18.741895 46.457263 7.760842 81.623579-5.726316 17.690947 16.666947 7.895579 16.666947 7.936 71.343158-29.763368 133.564632-31.514947 156.321684 0.862316 12.139789 17.246316 10.954105 41.472-0.215579 69.510737-5.173895 12.921263 1.589895 14.928842 11.466105 17.879579 40.178526 12.422737 84.924632 42.455579 84.924632 95.380211C772.837053 684.638316 646.090105 794.974316 455.531789 794.974316zM718.672842 427.802947c4.715789-14.457263 1.765053-30.962526-9.202526-43.061895-10.954105-12.072421-27.136-16.666947-42.037895-13.527579l0-0.026947c-12.463158 2.694737-24.724211-5.268211-27.392-17.664-2.667789-12.463158 5.281684-24.697263 17.744842-27.338105 30.531368-6.467368 63.595789 2.937263 85.989053 27.715368 22.447158 24.764632 28.456421 58.489263 18.849684 88.064-3.907368 12.099368-16.936421 18.728421-29.062737 14.848-12.139789-3.920842-18.782316-16.922947-14.874947-28.995368L718.672842 427.816421zM853.261474 471.134316c-0.013474 0.013474-0.013474 0.080842-0.013474 0.107789-4.567579 14.026105-19.712 21.706105-33.778526 17.165474-14.133895-4.554105-21.854316-19.590737-17.300211-33.670737l0-0.013474c13.999158-43.169684 5.12-92.429474-27.567158-128.565895-32.714105-36.122947-80.949895-49.92-125.507368-40.488421-14.484211 3.085474-28.752842-6.130526-31.838316-20.574316-3.098947-14.403368 6.144-28.631579 20.641684-31.717053l0.026947 0c62.625684-13.271579 130.519579 6.117053 176.545684 56.966737C860.483368 341.113263 872.892632 410.381474 853.261474 471.134316z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidanxiala" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128.069329 299.984259l768.418021 0c35.352159 0 64.034409-28.66076 64.034409-64.034409 0-35.373649-28.682249-64.034409-64.034409-64.034409L128.069329 171.915441c-35.372625 0-64.034409 28.66076-64.034409 64.034409C64.03492 271.322475 92.69568 299.984259 128.069329 299.984259zM896.48735 449.399243 128.069329 449.399243c-35.372625 0-64.034409 28.66076-64.034409 64.035432 0 35.372625 28.661783 64.034409 64.034409 64.034409l768.418021 0c35.352159 0 64.034409-28.661783 64.034409-64.034409C960.521758 478.060003 931.839509 449.399243 896.48735 449.399243zM896.48735 726.883045 128.069329 726.883045c-35.372625 0-64.034409 28.661783-64.034409 64.034409s28.661783 64.034409 64.034409 64.034409l768.418021 0c35.352159 0 64.034409-28.661783 64.034409-64.034409S931.839509 726.883045 896.48735 726.883045z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M961.952 980.416c0.8 2.848-1.12 0.832-0.352 3.744L961.952 980.416c0 14.752-11.968 26.72-26.656 26.72-14.752 0-27.904-11.968-27.904-26.72l0 0c-51.392-170.304-208.928-294.464-395.52-294.464-186.496 0-344.8 130.016-396.288 300.384l0.736-5.92c0 17.76-17.632 26.72-27.808 26.72C73.728 1007.136 61.856 995.168 61.856 980.416l0 0c0.672-2.912 0.864-5.76 1.696-8.64 0.32-0.768 0.384-1.568 0.672-2.272 43.52-149.568 159.136-268.352 306.752-315.232-113.6-53.312-192.448-168.736-192.448-302.912C178.528 166.688 327.744 16.832 511.872 16.832c184.096 0 333.408 149.856 333.408 334.56 0 134.144-78.88 249.6-192.512 302.88 147.712 46.912 263.296 165.696 306.784 315.232C959.84 970.24 961.696 979.68 961.952 980.416L961.952 980.416zM791.904 351.392c0-155.264-125.376-281.088-280.064-281.088-154.624 0-280 125.856-280 281.088 0 155.296 125.376 281.056 280 281.056C666.528 632.448 791.904 506.688 791.904 351.392L791.904 351.392zM791.904 351.392"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-canyin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M961.495434 569.698097c0-46.329165-24.746614-83.740216-58.366316-91.661629 14.832823-19.019169 22.953781-43.330878 22.953781-69.222571 0-68.674079-44.526099-143.574976-119.109772-200.36233-80.052221-60.953234-183.820586-94.52177-292.187689-94.52177-108.367103 0-212.135468 33.568537-292.187689 94.52177C148.015102 265.23892 103.487979 340.139817 103.487979 408.813896c0 24.414039 8.532327 49.196469 24.278963 68.922742-34.293037 7.238868-59.690474 45.024449-59.690474 91.961458 0 36.45426 0.044002 93.915973 45.191248 109.612467 2.240017 8.280594 5.619998 16.299221 10.917654 23.444968-0.86981 2.272763-1.866511 4.729721-1.866511 7.308453l0 84.014462c0 62.144362 51.559283 112.179942 113.703645 112.179942L793.383622 906.258389c62.144362 0 111.763456-50.036603 111.763456-112.179942l0-84.014462c0-1.39272 0.327458-2.75167 0.063445-4.066619 5.557576-7.416923 9.590426-16.394389 11.498892-26.751271C961.223235 663.771659 961.495434 608.327906 961.495434 569.698097zM247.424182 241.057171c72.959685-55.552224 167.910221-86.144986 267.36228-86.144986s194.401572 30.592762 267.361257 86.144986c64.466244 49.084928 102.953813 111.288642 102.953813 167.248142 0 46.731324-34.140565 67.141166-67.977207 67.141166L212.308407 475.446479c-33.346479 0-67.838038-24.795732-67.838038-67.141166C144.470369 352.346837 182.958962 290.1421 247.424182 241.057171zM139.795906 516.377704l72.512501 0 604.813872 0 72.652693 0c17.59268 0 30.737048 28.120454 30.737048 52.786227 0 62.72253-8.585539 71.743998-25.102724 72.856331-9.705036-0.743944-17.955954-4.508687-26.078958-11.07115-7.852852-7.251148-16.011672-16.892739-23.642466-25.979698-5.676279-6.757914-11.56029-13.726629-17.776875-20.337187-14.745842-16.594957-32.04688-31.153534-55.762001-32.267914-1.081635-0.064468-2.171456-0.094144-3.272533-0.094144-31.381731 0-53.488215 25.338085-74.866105 49.838082-2.131547 2.441609-4.270257 4.89345-6.41613 7.315616-15.771195 17.185404-31.78696 32.781614-46.61876 33.002648-0.966001-0.007163-1.927909-0.073678-2.886747-0.197498-14.170744-2.184759-31.262004-21.629623-46.444798-38.911218-1.673106-1.904373-3.350304-3.811816-5.03569-5.714142-18.645662-22.240537-39.998993-45.326325-69.857021-45.326325-0.188288 0-0.372483 0.01228-0.559748 0.014326-0.178055-0.002047-0.353041-0.014326-0.532119-0.014326-29.965475 0-52.426023 24.391527-74.147744 47.978734-18.576077 20.169365-37.766139 41.001833-57.387012 42.129516-19.370163-0.580215-37.173644-20.029172-55.999408-40.642652-11.82635-12.948917-23.867594-26.130124-37.446867-35.627429-10.644431-7.810896-22.252817-13.106506-35.513842-13.641695-1.552356-0.11768-3.120061-0.196475-4.717442-0.196475-34.564213 0-57.103556 29.239951-75.18026 53.92312-13.974269 17.913998-27.2619 34.612309-41.981137 36.090986-14.386662-1.013073-24.228821-9.575076-24.228821-73.129554C109.058858 544.499182 122.203226 516.377704 139.795906 516.377704zM847.61885 688.293145 179.603541 688.293145c-9.021467 0-16.219403-3.584642-21.049409-9.198499 19.542078-7.962346 33.914414-27.291576 47.913243-46.447868 0.49221-0.673335 0.985444-1.188058 1.478677-1.862417 0.118704-0.153496 0.2415-0.228197 0.360204-0.381693 14.758122-18.922978 28.706809-36.742832 44.288692-37.015032 5.176906 0.621147 10.629081 3.436262 16.228613 7.573489 8.242731 6.64535 17.187451 16.765849 25.962302 26.706245 23.066345 26.130124 49.210795 55.751768 87.679945 55.751768 0.425695 0 0.841158-0.020466 1.263783-0.027629 0.427742 0.007163 0.848321 0.031722 1.280156 0.031722 38.228673 0 64.285119-29.191856 87.273692-54.94745 15.22782-17.059538 30.959106-34.654264 43.889603-35.164894 11.103896 0.453325 25.731034 15.673981 39.401382 31.069623 1.284249 1.535983 2.568499 3.076058 3.847631 4.615111 19.891026 23.925922 42.269709 50.846038 75.065649 54.102199 2.0241 0.214894 4.079922 0.328481 6.169513 0.328481 0.081864 0 0.160659-0.00614 0.243547-0.00614 0.083911 0 0.164752 0.00614 0.249687 0.00614 32.633235 0 56.297191-23.342638 76.900438-46.573735 2.403746-2.619664 4.76963-5.239328 7.102768-7.822153 15.127536-16.749476 32.273031-35.735899 44.071751-35.735899 0.445138 0 0.884137 0.052189 1.327228 0.082888 8.052396 0.957815 17.271362 8.590656 26.521027 18.312064 3.831258 4.319375 7.927553 9.293667 12.446473 14.887059 9.485025 11.740392 20.062941 24.792663 32.985252 35.438117 9.496282 8.562003 19.820418 14.903431 31.335682 18.377556C868.843244 687.202301 859.853499 688.293145 847.61885 688.293145zM864.21483 794.077424c0 39.545668-31.28554 71.247694-70.831208 71.247694L236.021481 865.325118c-39.545668 0-72.771397-31.702026-72.771397-71.247694l0-63.828724 16.353456 0L847.61885 730.248699l16.59598 0L864.21483 794.077424z"  ></path>' +
    '' +
    '<path d="M415.662885 262.32966c11.863189 0 21.516036-9.650801 21.516036-21.516036s-9.651824-21.516036-21.516036-21.516036c-11.864212 0-21.516036 9.650801-21.516036 21.516036S403.797649 262.32966 415.662885 262.32966z"  ></path>' +
    '' +
    '<path d="M307.058374 377.080148c11.863189 0 21.516036-9.650801 21.516036-21.516036s-9.651824-21.516036-21.516036-21.516036c-11.864212 0-21.516036 9.650801-21.516036 21.516036S295.194162 377.080148 307.058374 377.080148z"  ></path>' +
    '' +
    '<path d="M618.526175 262.32966c11.863189 0 21.516036-9.650801 21.516036-21.516036s-9.651824-21.516036-21.516036-21.516036c-11.864212 0-21.516036 9.650801-21.516036 21.516036S606.66094 262.32966 618.526175 262.32966z"  ></path>' +
    '' +
    '<path d="M517.094018 377.080148c11.863189 0 21.516036-9.650801 21.516036-21.516036s-9.651824-21.516036-21.516036-21.516036c-11.864212 0-21.516036 9.650801-21.516036 21.516036S505.229806 377.080148 517.094018 377.080148z"  ></path>' +
    '' +
    '<path d="M727.129662 377.080148c11.863189 0 21.516036-9.650801 21.516036-21.516036s-9.651824-21.516036-21.516036-21.516036c-11.864212 0-21.516036 9.650801-21.516036 21.516036S715.26545 377.080148 727.129662 377.080148z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-nike" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M221.73101 387.803373c-56.402591 66.23861-110.488417 148.388609-111.032816 209.789027-0.208754 23.101137 7.163143 43.270503 24.855084 58.545394 25.462928 21.986757 53.509704 29.757744 81.424474 29.791513 40.793078 0.055259 81.302701-16.390295 113.017006-29.078269 53.417607-21.373797 643.86733-277.770328 643.86733-277.770328 5.691629-2.854001 4.626367-6.41306-2.49789-4.632507-2.870374 0.719384-642.798998 174.141132-642.798998 174.141132-12.351306 3.466961-24.966625 5.262864-37.245276 5.329379-49.181119 0.289596-92.939739-27.010167-92.588745-84.535325C198.874443 446.873724 205.767434 419.732573 221.73101 387.803373L221.73101 387.803373z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhifubao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M230.404452 576.536487C218.3168 586.264487 205.360974 600.466922 201.598887 618.520487 196.478887 643.18553 200.530365 674.061357 224.327235 698.281183 253.155061 727.64327 296.964452 735.679443 315.886191 737.059617 367.286539 740.777183 422.070539 715.288487 463.364452 686.215791 479.548104 674.795965 507.262887 651.86727 533.753322 616.494748 474.383583 585.84153 400.277148 551.938226 321.050713 555.255096 280.580452 556.946922 251.5968 565.33927 230.404452 576.536487ZM983.262609 712.080696C1009.463652 650.573913 1024 582.967652 1024 512 1024 229.687652 794.334609 0 512 0 229.665391 0 0 229.687652 0 512 0 794.334609 229.665391 1024 512 1024 682.384696 1024 833.491478 940.27687 926.630957 811.876174 838.633739 768.133565 693.604174 696.141913 604.271304 652.577391 561.641739 701.17287 498.621217 749.879652 427.430957 771.072 382.70887 784.361739 342.394435 789.437217 300.232348 780.822261 258.493217 772.274087 227.750957 752.729043 209.830957 733.139478 200.704 723.144348 190.21913 710.433391 182.628174 695.318261 183.340522 697.232696 183.830261 698.368 183.830261 698.368 183.830261 698.368 179.46713 690.843826 176.128 678.867478 174.413913 673.079652 173.256348 667.046957 172.78887 660.72487 172.432696 656.584348 172.343652 652.221217 172.588522 647.68 172.210087 639.977739 172.521739 631.897043 174.258087 623.616 178.44313 603.38087 187.080348 579.806609 209.430261 557.924174 258.493217 509.885217 324.207304 507.302957 358.244174 507.503304 408.665043 507.792696 496.283826 529.853217 570.056348 555.942957 590.491826 512.422957 603.603478 465.875478 612.062609 434.843826L305.307826 434.843826 305.307826 401.67513 462.825739 401.67513 462.825739 335.337739 272.13913 335.337739 272.13913 302.169043 462.825739 302.169043 462.825739 235.853913C462.825739 226.749217 464.62887 219.269565 479.410087 219.269565L554.028522 219.269565 554.028522 302.169043 761.321739 302.169043 761.321739 335.337739 554.028522 335.337739 554.028522 401.67513 719.849739 401.67513C719.849739 401.67513 703.198609 494.502957 651.130435 585.99513 766.686609 627.266783 929.257739 690.843826 983.262609 712.080696Z"  ></path>' +
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