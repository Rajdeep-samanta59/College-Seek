import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:Rajdeepaura1234@rajx.dvz3pcf.mongodb.net/Med_ix')
  .then(() => console.log('Connected!'))
  .catch(err => console.log('Error:', err));
  //needdd to bee deleted 