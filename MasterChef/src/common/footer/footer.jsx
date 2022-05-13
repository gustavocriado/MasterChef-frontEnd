import React, { Component } from "react";
import { Chip } from "primereact/chip";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="copyright">
          <h5>Desenvolvedores</h5>
        </div>
        <div className="flex align-items-center flex-wrap">
          <Chip
            label="Gustavo Criado"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQHQf1ZCDnIeWA/profile-displayphoto-shrink_800_800/0/1580992895070?e=1657756800&v=beta&t=KgoUqfTzCBPfxramzmplSOxlXQzsyrp49Ts0eBMqeTY"
            className="mr-2 mb-2 custom-chip"
          />
          <Chip
            label="Rodrigo Cunha"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQFRzBtFvoLSBg/profile-displayphoto-shrink_200_200/0/1517453642822?e=1657756800&v=beta&t=fkStGlqlAuLvusCzsQ3sDdvLgl0c5YRWk4v7iupKzPw"
            className="mr-2 mb-2 custom-chip"
          />
          <Chip
            label="Anderson Oliveira"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQFgojoiGCrQcA/profile-displayphoto-shrink_200_200/0/1650372253874?e=1657756800&v=beta&t=4BRbwEiSIYkHEALKIYp0ARN5R4mJZezmWQsL3YHQ1bY"
            className="mr-2 mb-2 custom-chip"
          />
          <Chip
            label="Daniel Luiz"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQERg10mK8oOdA/profile-displayphoto-shrink_200_200/0/1600782455378?e=1657756800&v=beta&t=aZJsVwRxHfUrzklmBtw9PBLVpLRlIBHgF38OmRaYKTg"
            className="mr-2 mb-2 custom-chip"
          />
        </div>
      </div>
    );
  }
}

export default Footer;
