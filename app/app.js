// Main
import { JobSearch } from './JobSearch';

const jobSearcg = new JobSearch('#search-form', './resul-container', '.loading-element');
jobSearch.setCountryCode();
jobSearch.configureFormListener();
