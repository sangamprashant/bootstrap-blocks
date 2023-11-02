import React from "react";

function BannerNightB() {
    const buttonStyle = {
        fontSize: '1em',
        height: '70px',
        padding: '0',
        textTransform: 'uppercase',
        background: 'transparent',
        color: '#fff',
        lineHeight: '1.5em',
        border: '1px solid #01b7f2',
        borderLeft: 'none',
        position: 'relative',
        overflow: 'hidden',
        letterSpacing: '0',
        display: 'inline-table',
        tableLayout: 'fixed',
        marginRight: '10px',
        marginBottom: '10px',
      };
    
      const iconStyle = {
        width: '55px',
        verticalAlign: 'middle',
        background: '#01b7f2',
        color: '#2d3e52',
        fontSize: '36px',
        display: 'table-cell',
        height: '70px',
        textAlign: 'right',
        paddingRight: '8px',
      };
    
      const iconAfterStyle = {
        display: 'block',
        content: '""',
        position: 'absolute',
        left: '55px',
        borderBottom: '70px solid #01b7f2',
        borderRight: '16px solid transparent',
        top: '0',
        bottom: '0',
      };
    
      const textStyle = {
        display: 'table-cell',
        verticalAlign: 'middle',
        padding: '0 20px 0 35px',
        textAlign: 'left',
      };
    
      const emStyle = {
        color: '#01b7f2',
        fontSize: '1.6667em',
        fontWeight: 'bold',
        fontStyle: 'normal',
      };
    
      return (
        <div className="block">
          <h1 className="d-flex justify-content-center h-100 gap">Play Store Buttons</h1>
          <div className="d-flex justify-content-center h-100 gap">
            <a className="button btn-extra" data-abc="true" style={buttonStyle}>
              <i className="fa fa-apple" style={iconStyle}></i>
              <span style={textStyle}>
                Download from <br />
                <em style={emStyle}>apple store</em>
              </span>
            </a>
            <a className="button btn-extra yellow" data-abc="true" style={buttonStyle}>
              <i className="fa fa-play" style={{ ...iconStyle, background: '#fdb714' }}></i>
              <span style={textStyle}>
                Download from <br />
                <em style={{ ...emStyle, color: '#fdb714' }}>google play</em>
              </span>
            </a>
          </div>
        </div>
      );
    };

export default BannerNightB;
