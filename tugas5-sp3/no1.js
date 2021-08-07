let newCallback =(nama,asal,pulang) =>{
    console.log(`${nama} ${asal}`);
    pulang()
}
let pulang = () => {
    console.log('pulang kampung')
}

newCallback('adi','yusuf',pulang)