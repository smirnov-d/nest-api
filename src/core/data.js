export default {
  companies: [
    {
      _id: 321,
      name: '',
      // убрать вложенность и поместить company_id в каждый филиал
      filials: [
        {
          _id: 1,
          name: '',
          address: {},
          geo: {
            lat: 2132132,
            lng: 13213213,
          }, // search
          categories: [
            {
              category_id: 222,
              category_name: 'cat_1',
              products: [
                {
                  _id: 1,
                  // filial_id: 1,
                  item_id: 1, // or product_id
                  count: 321,
                  cost: 100,
                  // category_name: 'name', // search
                  options: [
                    {
                      _id: 123123,
                      name: 'frame',
                      cost: 85,
                    },
                    {
                      _id: 130,
                      name: 'glasses',
                      cost: 150,
                    },
                  ],
                },
              ],
              services: [
                {
                  _id: 2,
                  // filial_id: 1,
                  item_id: 2,
                  // count: 1,
                  cost: 140,
                  // category_name: 'services', // search
                  schedule: [
                    {
                      doctor_id: 555,
                      date: '12.12.2021',
                      time: '10:00',
                    },
                  ],
                },
              ],
            },
          ],
          // items: [
          //   {
          //     _id: 1,
          //     filial_id: 1,
          //     item_id: 1,
          //     count: 321,
          //     cost: 100,
          //     category_name: 'name', // search
          //     options: [
          //       {
          //         _id: 123123,
          //         name: 'frame',
          //         cost: 85,
          //       },
          //       {
          //         _id: 130,
          //         name: 'glasses',
          //         cost: 150,
          //       },
          //     ],
          //   },
          //   {
          //     _id: 2,
          //     filial_id: 1,
          //     item_id: 2,
          //     count: 1,
          //     cost: 140,
          //     category_name: 'services', // search
          //     schedule: [],
          //   },
          // ],
        },
      ],
    },
  ],
  items: [
    {
      _id: 1,
      type: 'product',
      name: 'prod_1',
    },
    {
      _id: 2,
      type: 'service',
      name: 'service_1',
    },
  ],
  doctors: [],
  availability: [],
};
