import '@testing-library/jest-dom';
import adapter from "@cfaester/enzyme-adapter-react-18"
import { configure } from 'enzyme';

configure({ adapter: new adapter() });
