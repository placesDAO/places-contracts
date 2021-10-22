# Places DAO

[Places](https://places.xyz) is an experiment to establish geographic locations as non-fungible tokens on the Ethereum blockchain. The project aims to create long-term value by curating an ever-growing collection of specific places, submitted and verified by our community, for the purpose of providing them an immutable home on chain.

Please visit the [Places website](https://places.xyz) for the latest updates and details.

Contributions are welcome and we invite you to look at the contracts and website, all are open source and available under the MIT License.

| Contract | Etherscan |
|---------|---------------------------------------------------------------|
| Places | [0xC9CA129DC3a299aF68A215d85771630aec4C3C2b](https://etherscan.io/address/0xC9CA129DC3a299aF68A215d85771630aec4C3C2b#code) |
| PlacesDescriptor | [0x7C4fAd970E51fBE5CFCa2097C3AA559e3E0aEAf8](https://etherscan.io/address/0x7C4fAd970E51fBE5CFCa2097C3AA559e3E0aEAf8) |
| PlacesProvider | [0x5219C11e18934AADB4DDa41E3485bD79DAE08F10](https://etherscan.io/address/0x5219C11e18934AADB4DDa41E3485bD79DAE08F10#code) |

# 💡 Ideas

We're excited for you to use places! The PlacesDAO itself is interested in funding…

- An API for searching and discovering Places
- A tool or marketplace for trading Places, especially as the project grows to many neighborhoods and communities
- PFP + Places remixes
- Systems that provide verifiable proof-of-location, proof-of-sale, or proof-of-attendance at Places
- Systems for routing and waypoint navigation
- Augmented reality experiences at Places
- List-building dapp for guides and tours
- Derivative place tokens that can be minted and claimed by verified IRL place owners
- Generative geographic visualizations

# 🚶‍♀️ Walkthrough

The core `Places.sol` contract is immutable and can not be modified in order to maintain it's address. It communicates with `PlacesDescriptor` and `PlacesProvider` contracts. The `PlacesDescriptor` generates the svg on chain for the ERC-721 tokenURI – no images, tiles, or third party sources in the loop. The `PlacesProvider` contract maintains a variety of "drop" contracts that share on chain information about places and communicate that back. 

# 📍 Places

Represents place information for a geographic location.

* name – string representing the place name
* streetAddress – string indicating a precise address
* sublocality – string representing the subdivision and first-order civil entity below locality (neighborhood or common name)
* locality – string representing the incorporated city or town political entity
* subadministrativeArea – string representing the subdivision of the second-order civil entity (county name)
* administrativeArea – string representing the second-order civil entity below country (state or region name)
* country – string representing the national political entity
* postalCode – string representing the code used to address postal mail within the country
* countryCode – string representing the ISO 3166-1 country code, https://en.wikipedia.org/wiki/ISO_3166-1
* location – geographic location of the place, see Location type
* attributes – string array of attributes describing the place

# 🛰 Locations

Represents a geographic coordinate with altitude.

Places provide location information in two formats, string and integers. Since double floating points are not a native type in Solidity, we encode location data up to 14 decimal places and provide a means to decode without losing precision but while also allowing the ability to perform computation on-chain. To bound coordinates positive (North and East) or negative (South and West) use the `MAX_LATITUDE_INT`, `MIN_LATITUDE_INT`, `MAX_LONGITUDE_INT`, and `MIN_LONGITUDE_INT` integer constants.

Latitude and longitude values are in degrees under the WGS 84 reference frame. Altitude values are in meters.

* hasAltitude – a boolean that indicates the validity of the altitude values, when false no altitude is available.

## Location Integer Encoding

Decoding a location can be done using `GEO_RESOLUTION_INT` as a divisor. 

```sh
3781925338694573 / 100000000000000 = 37.81925338694573
-12247852582409405 / 100000000000000 = -122.47852582409405
```

* latitudeInt – integer representing the latitude in degrees encoded with GEO_RESOLUTION_INT
* longitudeInt – integer representing the longitude in degrees encoded with GEO_RESOLUTION_INT
* altitudeInt – integer representing the altitude in meters encoded with GEO_RESOLUTION_INT

## Location Strings

WYSIWYG. We added strings for more future proofing, allowing casting and printing of data.

* latitude – string representing the latitude coordinate in degrees under the WGS 84 reference frame
* longitude – string representing the longitude coordinate in degrees under the WGS 84 reference frame
* altitude – string representing the altitude measurement in meters

# 🧠 Resources
- https://github.com/OpenZeppelin/openzeppelin-contracts
- https://docs.opensea.io/docs/metadata-standards
- https://github.com/platinprotocol/solidityGEO
- https://trufflesuite.com

# 🙌 Influences
- https://nouns.wtf
- https://lootproject.com

WGMI.
