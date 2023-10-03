import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Button from "./elements/button";
import TextInput from "./elements/TextInput";

const initialPeopleBio = [
  // Data orang-orang seperti yang telah Anda berikan
];

function App() {
  const [inputName, setInputName] = useState('');
  const [inputNim, setInputNim] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [peopleBio, setPeopleBio] = useState(initialPeopleBio);

  const handleNameInputChange = (event) => {
    setInputName(event.target.value);
  };

  const handleNimInputChange = (event) => {
    setInputNim(event.target.value);
  };

  const handleAgeInputChange = (event) => {
    setInputAge(event.target.value);
  };

  const handleEmailInputChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handleAddPerson = () => {
    if (inputName.trim() !== '') {
      const newPerson = {
        id: Date.now(), // Tambahkan properti ID unik
        name: inputName,
        nim: inputNim,
        age: inputAge,
        email: inputEmail,
        text: '', // Atur teks sesuai kebutuhan
        profile: '', // Atur profil sesuai kebutuhan
        link: '', // Atur link sesuai kebutuhan
      };
      setPeopleBio([...peopleBio, newPerson]);
      setInputName('');
      setInputNim('');
      setInputAge('');
      setInputEmail('');
    }
  };

  const handleClearAllData = () => {
    setPeopleBio([]); // Menghapus semua data dengan mengatur peopleBio menjadi array kosong
    setInputName('');
    setInputNim('');
    setInputAge('');
    setInputEmail('');
  };

  const handleRemovePerson = (id) => {
    const updatedPeopleBio = peopleBio.filter((person) => person.id !== id);
    setPeopleBio(updatedPeopleBio);
  };

  return (
    <>
      <div className='col-md-12'>
        <Header />
      </div>

      <div className='text-center'>
        <h1>Tugas Praktikum</h1>
        <h2>Ini adalah hasil dari penugasan yang dikerjakan oleh kelompok 21</h2>
      </div>

      <div className='text-center'>
        {/* Input dan tombol Tambah Anggota */}
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type='text'
                  placeholder='Masukkan nama...'
                  value={inputName}
                  onChange={handleNameInputChange}
                  className='TextInput'
                />
              </td>
              <td>
                <input
                  type='text'
                  placeholder='Masukkan NIM...'
                  value={inputNim}
                  onChange={handleNimInputChange}
                  className='TextInput'
                />
              </td>
              <td>
                <input
                  type='text'
                  placeholder='Masukkan umur...'
                  value={inputAge}
                  onChange={handleAgeInputChange}
                  className='TextInput'
                />
              </td>
              <td>
                <input
                  type='text'
                  placeholder='Masukkan email...'
                  value={inputEmail}
                  onChange={handleEmailInputChange}
                  className='TextInput'
                />
              </td>
              <td>
                <button onClick={handleAddPerson} className='AddPersonButton'>Tambah Anggota</button>
                <button onClick={handleClearAllData} className='ClearAllDataButton'>Clear All Data</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className='text-center'>Nama yang dimasukkan: {inputName}</h2>
      <div className='d-flex flex-wrap justify-content-around w-100 p-3'>
        {peopleBio.map((person) => (
          <Home key={person.id} props={person}>
            <button onClick={() => handleRemovePerson(person.id)}>Hapus</button>
          </Home>
        ))}
      </div>
    </>
  );
}

export default App;
