import React, { useEffect, useState } from "react";
import './Board.css';
import { supabase } from "../client";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function Board() {
  return (
    <div className="board"></div>
  )
};

export default Board;