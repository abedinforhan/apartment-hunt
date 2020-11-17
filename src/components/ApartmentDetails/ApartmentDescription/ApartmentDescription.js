import React from 'react';

const ApartmentDescription = () => {
      return (
            <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="mt-4">
                        <div className="d-flex font-weight-bold justify-content-between">
                            <h1>Name</h1>
                            <h1 style={{ color: "rgba(39, 90, 83, 1)" }}>$254</h1>
                        </div>
                        <div className="text-secondary">300 sq-ft, 3 bedroom, Semi-furnished, Luxurious, South-facing Apartment for Rent in Rangs Malancha, Dhaka.</div>
                    </div>
                    <div className="mt-5">
                        <h3 className="font-weight-bold" style={{ color: "#16322E!important" }}>Price Details-</h3>
                        <p className="text-secondary">Rent/Month : $550 (negotiable)</p>
                        <p className="text-secondary">Service Charge : 8,000/= Tk per month</p>
                        <p className="text-secondary">Security Deposit : 3 month's rent</p>
                        <p className="text-secondary">Flat Release Policy : 3 months earlier notice required</p>

                    </div>
                    <div className="mt-5 mb-5">
                        <h3 className="font-weight-bold" style={{ color: "#16322E!important" }}>Property Details-</h3>
                        <p className="text-secondary">Address &amp; Area : Rangs Malancha, House #68, Road #6A, Dhanmondi Residential Area</p>
                        <p className="text-secondary">Flat Size : 3000 sq-ft</p>
                        <p className="text-secondary">Floor : A5 (5th Floor), 6 storied building, South facing unit</p>
                        <p className="text-secondary">Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining &amp; Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet</p>
                        <p className="text-secondary">Facilities : 1 Modern Lift, All Modern Amenities &amp; Semi Furnished, Electricity with full generator, Central Gas Geyser, Car Parking with Driver's Accommodation, Community Conference Hall, Roof top Beautiful Garden and Grassy Ground, Cloth Hanging Facility with CC camera</p>
                    </div>
                </div>
            </div>
        </div>
      );
};

export default ApartmentDescription;