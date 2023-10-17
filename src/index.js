import React from 'react';
import { createRoot } from "react-dom/client";

import Sayac from './components/Sayac';
import Input from './components/Input';
import RuhHalleri from './components/RuhHalleri';
import Dondurucu from './components/Dondurucu';
import Kareler from './components/Kareler';
import Programcilar from './components/Programcilar';
import Todos from './components/Todos';



const container = document.getElementById("root");
const root = createRoot(container)
root.render(<>
  <Sayac />
  <RuhHalleri />
  <Dondurucu />
  <Input />
  <Kareler />
  <Programcilar />
  <Todos />
</>);
