export interface Station {
    id: string;
    x: number;
    y: number;
    modifier: string;
  }
  
  export interface Belt {
    id: string;
    stations: Station[];
    isMoving : boolean;
  }
  
  export interface Item {
    id: string;
    type: string;
    beltId: string;
    position: number; // 0 to 1, representing progress along the belt
  }
  
