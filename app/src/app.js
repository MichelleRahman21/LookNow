// Main
import { JobSearch } from './JobSearch';

const jobSearch = new JobSearch('#search-form', './result-container', '.loading-element');
jobSearch.setCountryCode();
jobSearch.configureFormListener();

// so the backend knows what is taking from the API 
