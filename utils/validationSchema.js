export const createClientValidationSchema = {
  username: {
    isLength: {
      options: {
        max: 30,
        min: 4
      },
      errorMessage:
        'Client must be at least 4 characters with a max of 30 characters'
    },
    notEmpty: {
      errorMessage: 'Client cannot be empty'
    },
    isString: {
      errorMessage: 'Client must be a string!'
    }
  },
  specialPricing: {
    isArray: {
      errorMessage: 'Special pricing must be an array'
    },
    notEmpty: {
      errorMessage: 'Special pricing cannot be empty'
    }
  }
};

export const createProductValidationSchema = {
  name: {
    isLength: {
      options: {
        max: 30,
        min: 3
      },
      errorMessage:
        'Name must be at least 3 characters with a max of 30 characters'
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty'
    },
    isString: {
      errorMessage: 'Name must be a string!'
    }
  },
  brand: {
    isLength: {
      options: {
        max: 30,
        min: 4
      },
      errorMessage:
        'Brand must be at least 4 characters with a max of 30 characters'
    },
    notEmpty: {
      errorMessage: 'Brand cannot be empty'
    },
    isString: {
      errorMessage: 'Brand must be a string!'
    }
  },
  price: {
    isNumeric: {
      errorMessage: 'Price must be a number'
    },
    notEmpty: {
      errorMessage: 'Price cannot be empty'
    }
  },
  inStock: {
    isBoolean: {
      errorMessage: 'In stock must be a boolean'
    },
    notEmpty: {
      errorMessage: 'In stock cannot be empty'
    }
  }
};
