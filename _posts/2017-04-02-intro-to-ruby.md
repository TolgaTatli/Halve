---
layout: post
title:  "Introduction to Ruby"
date:   2017-04-02
excerpt: "Ruby is an object oriented language"
tag:
- Dev Bootcamp 
- learn to code
- blog
- Ruby
---

We have taken a dive into Ruby, a dynamic, object-oriented language created by Yukihiro Matsumoto (lovingly referred to as "Matz").

When asked about the creation of the language, this is what Matz had to say:

> I was talking with my colleague about the possibility of an object-oriented scripting language. I knew Perl (Perl4, not Perl5), but I didn't like it really, because it had the smell of a toy language (it still has). The object-oriented language seemed very promising. I knew Python then. But I didn't like it, because I didn't think it was a true object-oriented language — OO features appeared to be add-on to the language. As a language maniac and OO fan for 15 years, I really wanted a genuine object-oriented, easy-to-use scripting language. I looked for but couldn't find one. So I decided to make it.

While the language was written and released in the mid-1990's, the surge in popularity didn't happen around 2005, when the framework [Ruby on Rails] was introduced. Since then, it has enjoyed wide usage, especially with startups that want to produce a robust web application quickly and efficiently.

Now, let's look at some features of the language:

* Everything in Ruby is an object. Hashes, arrays, strings, integers, Booleans, etc.
* Ruby separates everything into different classes. For example, the following classes all exist in Ruby:
  * Hash
  * Array
  * String
  * Fixnum
  * NilClass

```ruby
{:key => 'value'}.class

# => Hash 

[1, 2, 3, 4].class

# => Array 

1.class

# => FixNum 

nil.class

# => NilClass

''.class

# => String
```

Let's look at some simple examples of code in Ruby, with different classes:

```ruby
number = 5 # Notice that we don't need to explicitly need to use `var` in front of the variable name

name = 'Preet'
name.length
# => 5

number == name.length ? true : false
# => true

fruits = ['apple', 'kiwi', 'banana']
fruits.size
# => 3

sports_teams = {
  :football => 'Seahawks',
  :baseball => 'Mariners',
  :basketball => 'The NBA stole our team!'
}

sports_teams[:basketball]
# => 'The NBA stole our team!'
```

For gathering input from a user, we can use the `gets.chomp` method as follows:

```ruby
puts 'What is your name, user?'
name = gets.chomp
puts "It is very nice to have you back, #{name}!"
```

In the above example, we use string interpolation to use the value of the variable `name` in the statement we print.

Ruby is very expressive, dynamic, and friendly for beginners. It is a great first language to learn, and one that can be very powerful when paired with web frameworks such as [Ruby on Rails].

[Ruby on Rails]: http://www.rubyonrails.org