type imageProps = {
  rowOneFirst: string;
  rowOneSecond: string;
  rowTwoFirst: string;
  rowTwoSecond: string;
  titleFirst: string;
  titleSecond: string;
}

export default function WelcomeRPS(props: imageProps) {


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
        color: "#fff",
        // backgroundImage: 'url(https://ipfs.io/ipfs/QmWfMMZnnrTiyXknqDEFt4gMNjkxz5bvRMYdwsuPH2C3R4)',
      }}
    >


      <div style={{ display: 'flex', marginTop: 180, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: "black", paddingTop: 10, paddingBottom: 10 }}>
        <div style={{ flexBasis: '43%', justifyContent: 'flex-end', color: '#808080', fontSize: 46 }}>{props.titleFirst}</div>
        <div style={{ flexBasis: '57%', justifyContent: 'flex-start', paddingLeft: 15, fontSize: 46 }}>{props.titleSecond}</div>
      </div>



      <div style={{ display: 'flex', marginTop: 100, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: "black", paddingTop: 10, paddingBottom: 10 }}>
        <div style={{ flexBasis: '43%', justifyContent: 'flex-end', color: '#808080' }}>{props.rowOneFirst}</div>
        <div style={{ flexBasis: '57%', justifyContent: 'flex-start', paddingLeft: 15 }}>{props.rowOneSecond}</div>
      </div>
      <div style={{ display: 'flex', marginTop: 0, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: "black", paddingTop: 10, paddingBottom: 10 }}>
        <div style={{ flexBasis: '43%', justifyContent: 'flex-end', color: '#808080' }}>{props.rowTwoFirst}</div>
        <div style={{ flexBasis: '57%', justifyContent: 'flex-start', paddingLeft: 15 }}>{props.rowTwoSecond}</div>
      </div>
      <div style={{ display: 'flex', marginTop: 100, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: "black", paddingTop: 2, paddingBottom: 20, fontSize: 16 }}>
        <div style={{ flexBasis: '80%', justifyContent: 'flex-end', color: '#808080' }}></div>
        <div style={{ flexBasis: '20%', justifyContent: 'flex-start', paddingLeft: 15 }}>built with TAVERN</div>
      </div>
    </div>
  )
}