const { z } = require('zod');

const userSchema = z.object({
      email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'Invalid email format' }),

  password: z
    .string({ required_error: 'Password is required' })
    .trim()
    .min(6, { message: 'Password must be at least 6 characters' }),
    /*
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(5, { message: 'Minimum 5 characters required for name' })
    .max(25, { message: 'Maximum 25 characters allowed for name' }),



  phone: z
    .string({ required_error: 'Phone is required' })
    .trim()
    .regex(/^\d{10,}$/, { message: 'Phone must be at least 10 digits and numeric' }),

  address: z
    .string({ required_error: 'Address is required' })
    .trim()
    .min(1, { message: 'Address cannot be empty' }),

  profile: z
    .string({ required_error: 'Profile is required' })
    .trim()
    .min(1, { message: 'Profile cannot be empty' }),
    */
});

module.exports = userSchema;
