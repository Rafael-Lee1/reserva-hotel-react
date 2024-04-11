import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function HotelRoom({ room, bookRoom }) {
  return (
    <div className="hotel-room">
      <h3>{room.name}</h3>
      <p>Preço por noite: ${room.price}</p>
      <button onClick={() => bookRoom(room)}>Reservar Quarto</button>
    </div>
  );
}

function HotelBookingApp() {
  const [rooms, setRooms] = useState([]);
  const [bookedRooms, setBookedRooms] = useState([]);
  const [roomName, setRoomName] = useState('');
  const [roomPrice, setRoomPrice] = useState('');

  const addRoom = () => {
    if (roomName && roomPrice) {
      const newRoom = {
        name: roomName,
        price: parseFloat(roomPrice),
      };
      setRooms([...rooms, newRoom]);
      setRoomName('');
      setRoomPrice('');
    }
  };

  const bookRoom = (room) => {
    setBookedRooms([...bookedRooms, room]);
    setRooms(rooms.filter((r) => r !== room));
  };

  return (
    <div>
      <h1>Aplicativo de Reserva de Quartos de Hotel</h1>
      <div className="room-form">
        <input
          type="text"
          placeholder="Nome do Quarto"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço por Noite"
          value={roomPrice}
          onChange={(e) => setRoomPrice(e.target.value)}
        />
        <button onClick={addRoom}>Adicionar Quarto</button>
      </div>
      <div className="room-list">
        <h2>Quartos Disponíveis</h2>
        {rooms.map((room, index) => (
          <HotelRoom key={index} room={room} bookRoom={bookRoom} />
        ))}
      </div>
      <div className="booked-rooms">
        <h2>Quartos Reservados</h2>
        {bookedRooms.map((room, index) => (
          <HotelRoom key={index} room={room} />
        ))}
      </div>
    </div>
  );
}

export default HotelBookingApp;
