// const axios = {
// 	get: jest.fn(() => Promise.resolve({ data: {} })),
// 	create: () => axios,
// 	defaults: {
// 		adapter: {},
// 	},
// };

const axios: any = jest.createMockFromModule('axios');

axios.create.mockReturnThis();

export default axios;
