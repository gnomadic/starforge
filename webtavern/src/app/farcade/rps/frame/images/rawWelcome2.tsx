type imageProps = {
  rowOneFirst: string;
  rowOneSecond: string;
  rowTwoFirst: string;
  rowTwoSecond: string;
  titleFirst: string;
  titleSecond: string;
}

export default function rawWelcome(props: imageProps) {

  return (
    <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      fontSize: 32,
      fontWeight: 600,
      color: "#dcfaff",
      backgroundImage: 'url(https://cyan-fiscal-mackerel-412.mypinata.cloud/ipfs/QmVeZMnfTWTRAVAmpxbLV5uz2QMyAMHNLWhc7s43bLizGH)',
    }}
  >


    <div style={{ display: 'flex', marginTop: 0, flexDirection: 'row', backgroundColor: "#08c5fe", paddingTop: 10, paddingBottom: 0 }}>

      <div style={{ flexBasis: '100%', justifyContent: 'flex-end', color: '#dcfaff', fontSize: 45, paddingRight: '50' }}>
        Rock Paper Scissors
      </div>

    </div>
    <div style={{ display: 'flex', marginTop: 0, flexDirection: 'row', backgroundColor: "#08c5fe", paddingTop: 0, paddingBottom: 10 }}>
      <div style={{ flexBasis: '100%', justifyContent: 'flex-end', color: '#dcfaff', fontSize: 12, paddingRight: '50' }}>
        onchain summer at the farcade
      </div>

    </div>



    <div style={{ display: 'flex', marginTop: 50, flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10, paddingBottom: 10 }}>
      <div style={{ flexBasis: '70%', justifyContent: 'flex-start', color: '#dcfaff', backgroundColor: "#08c5fe", fontSize: 36, paddingLeft: "10", paddingTop: "10", paddingBottom: "10" }}>
        make your move!
      </div>
      <div style={{ flexBasis: '30%', justifyContent: 'flex-start', paddingLeft: 15 }}></div>
    </div>

    <div style={{ display: 'flex', marginTop:50, flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10, paddingBottom: 0 }}>
      <div style={{ flexBasis: '40%', justifyContent: 'flex-start', color: '#dcfaff', backgroundColor: "#08c5fe", fontSize: 20, paddingLeft: "10", paddingTop: "10", paddingBottom: "10" }}>
        you won last game
      </div>
      <div style={{ flexBasis: '60%', justifyContent: 'flex-start', paddingLeft: 15 }}></div>
    </div>


    <div style={{ display: 'flex', marginTop: 0, flexDirection: 'row', flexWrap: 'wrap', paddingTop: 0, paddingBottom: 0 }}>
      <div style={{ flexBasis: '40%', justifyContent: 'flex-start', color: '#dcfaff', backgroundColor: "#08c5fe", fontSize: 18, paddingLeft: "10", paddingTop: "10", paddingBottom: "10"}}>
        you played rock
      </div>
      <div style={{ flexBasis: '60%', justifyContent: 'flex-start', paddingLeft: 15 }}></div>
    </div>

    <div style={{ display: 'flex', marginTop: 0, flexDirection: 'row', flexWrap: 'wrap', paddingTop: 0, paddingBottom: 10 }}>
      <div style={{ flexBasis: '40%', justifyContent: 'flex-start', color: '#dcfaff', backgroundColor: "#08c5fe", fontSize: 18, paddingLeft: "10", paddingTop: "10", paddingBottom: "10" }}>
        0x1234 played scissors
      </div>
      <div style={{ flexBasis: '60%', justifyContent: 'flex-start', paddingLeft: 15 }}></div>
    </div>


    <div style={{ display: 'flex', marginTop: 140, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: "black", paddingTop: 10, paddingBottom: 10, fontSize: 16 }}>
      <div style={{ flexBasis: '70%', justifyContent: 'flex-end', color: '#808080' }}></div>
      <div style={{ flexBasis: '30%', justifyContent: 'flex-start', paddingLeft: 15 }}>
        built with TAVERN
      </div>
    </div>
  </div>
  )
}