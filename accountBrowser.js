import { LightningElement, wire, track } from 'lwc';
import getClassRecords from '@salesforce/apex/Detailo.result';
const DELAY = 400;
export default class AccountBrowser extends LightningElement {
  
  endless
  takingAccount
  max;
  newone
  isFirst = true;
  @track fetchlist = [];
  handleSearch(event){
    this.endless = event.target.value;
    if(this.endless === ''){
      this.fetchlist = [];
      return;
    }
    console.log('Endless',this.endless)
    this.newone =  this.endless.trim();
    clearTimeout(this.max);
    
    console.log('Endless',this.newone);
  this.max = setTimeout(() => {
      this.takingAccount = this.newone;
    }, DELAY);
      
  }
  
  
  
  
  // Apex class is working fine . It has been checked.
  @wire(getClassRecords, { objectApiName: 'Account' , searchKey:'$takingAccount' })
  wiredRecords({ data, error }) {
    
    if (data) {
      this.fetchlist = data;
      console.log('This is the result', data);
    } else if (error) {
      console.error('Wire error', error);
    }
  } 
}

