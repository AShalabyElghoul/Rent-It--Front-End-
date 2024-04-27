import { Component } from '@angular/core';
import {faFacebookF , faTwitter,faLinkedinIn,faGoogle,faSkype}from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent {
fafacebook=faFacebookF
fatwitter = faTwitter
falinkedin=faLinkedinIn
fagoogle = faGoogle
faskype= faSkype
}
