let Laptop = require('../../domain-layer/classes/products/Laptop');
let LaptopTDG = require('../../data-source-layer/TDG/LaptopTDG');
let AbstractMapper = require('./AbstractMapper');

/**
 * Laptop object mapper
 * @class LaptopMapper
 * @export
 */
class LaptopMapper extends AbstractMapper {
  /**
   * Creates a new laptop
   * @static
   * @param {string} model model number of laptop.
   * @param {string} brand brand of laptop.
   * @param {number} display  size of laptop screen.
   * @param {string} processor processor in laptop.
   * @param {number} ram ram amount in laptop.
   * @param {number} storage storage size of laptop.
   * @param {number} cores amount of cores in processor in laptop.
   * @param {string} os operating system of laptop.
   * @param {string} battery battery information of laptop.
   * @param {string} camera camera information of laptop.
   * @param {boolean} touch is display touch or not.
   * @param {string} dimensions dimensions of laptop.
   * @param {number} weight weight of laptop.
   * @param {number} price price of laptop
   * @param {number} version version of tablet
   * @return {laptop} laptop object.
   */
    static create(model, brand, display, processor, ram, storage, cores, os, battery, camera, touch, dimensions, weight, price, version) {
        let laptop = new Laptop(model, brand, display, processor, ram, storage, cores, os, battery, camera, touch, dimensions, weight, price, version);
        return laptop;
    }

  /**
   * Maps the returned value to an object of type laptop.
   * @static
   * @param {string} modelNumber model number of laptop to be found.
   * @param {function} callback function that holds laptop object
   */
    static find(modelNumber, callback) {
            LaptopTDG.find(modelNumber, function(err, result) {
                if (err) {
                    console.log('Error during laptop find query', null);
                } else {
                    let value = result[0];
                    if (result.length==0) {
                        return callback(err, null);
                    } else {
                        let laptop = new Laptop(value.model, value.brand, value.display, value.processor,
                            value.ram, value.storage, value.cores, value.os,
                            value.battery, value.camera, value.touch, value.dimensions,
                            value.weight, value.price, value.version);
                        return callback(null, laptop);
                    }
                }
            });
    }

  /**
   * Maps all returned values into objects of type laptop.
   * @static
   * @param {function} callback function that holds array of laptop objects
   */
    static findAll(callback) {
        LaptopTDG.findAll(function(err, result) {
            let laptops = [];
            if (err) {
                console.log('Error during laptop findAll query', null);
            } else {
                for (let value of result) {
                    let laptop = new Laptop(value.model, value.brand, value.display, value.processor,
                        value.ram, value.storage, value.cores, value.os,
                        value.battery, value.camera, value.touch, value.dimensions,
                        value.weight, value.price, value.version);
                    laptops.push(laptop);
                }
                return callback(null, laptops);
            }
        });
    }

  /**
   * Maps an objects attributes to seperate values for TDG insert method.
   * @static
   * @param {Object} laptopObject an object of type laptop.
   */
    static insert(laptopObject) {
        LaptopTDG.insert(laptopObject.model, laptopObject.brand, laptopObject.display, laptopObject.processor,
            laptopObject.ram, laptopObject.storage, laptopObject.cores, laptopObject.os,
            laptopObject.battery, laptopObject.camera, laptopObject.touch, laptopObject.dimensions,
            laptopObject.weight, laptopObject.price, function(err, result) {
                if (err) {
                    console.log(err);
                }
            });
    }

  /**
   * Maps an objects attributes to seperate values for TDG update method.
   * @static
   * @param {Object} laptopObject an object of type laptop.
   */
    static update(laptopObject) {
        LaptopTDG.update(laptopObject.model, laptopObject.brand, laptopObject.display, laptopObject.processor,
            laptopObject.ram, laptopObject.storage, laptopObject.cores, laptopObject.os,
            laptopObject.battery, laptopObject.camera, laptopObject.touch, laptopObject.dimensions,
            laptopObject.weight, laptopObject.price, laptopObject.version, function(err, result) {
                if (err) {
                    console.log(err);
                }
            });
    }

  /**
   * Extracts an objects id to use with TDG delete method.
   * @static
   * @param {Object} laptopObject an object of type laptop.
   */
    static delete(laptopObject) {
        LaptopTDG.delete(laptopObject.model, function(err, result) {
            if (err) {
               console.log(err);
            }
        });
    }
}

module.exports = LaptopMapper;
