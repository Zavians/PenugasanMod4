import React from 'react';

const praktikan = {
    name: 'Kelompok 21', jurusan: 'Teknik Komputer 2020'
};

function greetings(praktikan) {
    return praktikan.name + ' dari ' + praktikan.jurusan;
}

//menggunakan JSX
const ReactJSX = () => {
    return (
        <div>
            <h1 style={{color: '#435334'}}>KELOMPOK 21</h1>
            <h2 style={{color: '#435334'}}>Halo Semua!! {greetings(praktikan)} Ada Disini</h2>
        </div>
    );
}
export default ReactJSX;
