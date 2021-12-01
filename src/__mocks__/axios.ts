// const axios = {
// 	get: jest.fn(() => Promise.resolve({ data: {} })),
// 	create: () => axios,
// 	defaults: {
// 		adapter: {},
// 	},
// };

const axios: any = jest.genMockFromModule('axios');

axios.create.mockReturnThis();

export default axios;
