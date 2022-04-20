export default function handler({query: {lang}}, res) {
    let language = lang ? lang : 'ind';
    const eng = {
        pertama: 'Hai I am',
        judAbout: 'About Me',
        about: 'I am graduated from SMK TI Pembangunan Cimahi in 2021, after graduated I learn many things about\
                programing language for web development like PHP, Javascript, Python, etc.',
        headAbout: "Hai I am Asep, a Back End Developer in Sineashub for their streaming website.",
        pen: "Education",
        tooltip: {
            home: 'Home',
            about: 'About Me',
            pendidikan: 'Education',
            projek: 'Project'
        },
        smp: {
            tahun: '2015 - 2018',
            nama: 'SMPN 23 Bandung',
            prestasi: ['Menjadi juara 1 lomba pelajaran IPA satu sekolah', 'Selalu dapat 3 besar saat tryout']
        },
        smk: {
            tahun: '2018 - 2021',
            nama: 'SMK TI Pembangunan Cimahi',
            jurusan: 'Rekayasa Perangkat Lunak',
            prestasi: ['Menjadi ranking 1 selama kelas 11', 'Menjadi ketua kelas di kelas 11', 'Selalu dapat ranking 3 besar dari kelas 10 - 11']
        },
        projek: [{
                nama: 'E Voting RT RW',
                perusahaan: 'PT Mabra Technology Solutions',
                waktu: 'Jul, 2021 - Des, 2021',
                desc: 'The application that I made while working at PT Mabra Technology Solution, was made with the PHP programming language, the application was made with the aim of making it easier to vote in the RT RW area.',
                foto: []
            },
            {
                nama: 'Ujian Digital',
                perusahaan: 'Personal Projek',
                waktu: 'Nov, 2020 - Feb, 2021',
                desc: 'The application that I made to replace field work practices due to covid-19, was made with the PHP programming language and the Code Igniter framework, this application was made with the aim of making it easier for schools to carry out exams.',
                foto: []
            },
            {
                nama: 'Laundry Manager App',
                perusahaan: 'Personal Projek',
                waktu: 'Apr, 2021 - Mei, 2021',
                desc: 'The application that I made during the school competency exam, made with the PHP programming language and the Code Igniter framework, was made with the aim of making it easier for laundry companies to carry out their activities.',
                foto: []
            },
            {
                nama: 'Streamtube',
                perusahaan: 'Sineashub',
                waktu: 'Mar, 2022 - sekarang',
                desc: 'A streaming website application that is currently under construction, I created a server side code using the PHP programming language and the Laravel framework.',
                foto: []
            }
        ]
    };
    const data = language === 'ind' ? { ...indo } : { ...eng };
    res.status(200).json(data);
};