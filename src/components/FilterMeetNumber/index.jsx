import React from "react";
import { useDispatch } from "react-redux";
import { FILTER_MEET_NUMBER } from "../../redux/filterSlice";

function FilterMeetNumber() {
  const dispatch = useDispatch();

  return (
    <div className="w-full px-3 py-2 flex flex-row items-center gap-x-2">
      <label
        htmlFor=""
        className="w-max px-5 text-primary-grey dark:text-white text-sm"
      >
        Select Session
      </label>
      <select
        defaultValue={"1"}
        name="filter"
        onChange={(e) => {
          dispatch(FILTER_MEET_NUMBER(e.target.value));
        }}
        className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={"1"}>Session 1</option>
        <option value={"2"}>Session 2</option>
        <option value={"3"}>Session 3</option>
        <option value={"4"}>Session 4</option>
        <option value={"5"}>Session 5</option>
        <option value={"6"}>Session 6</option>
        <option value={"7"}>Session 7</option>
        <option value={"8"}>Session 8</option>
        <option value={"9"}>Session 9</option>
        <option value={"10"}>Session 10</option>
        <option value={"11"}>Session 11</option>
        <option value={"12"}>Session 12</option>
        <option value={"13"}>Session 13</option>
        <option value={"14"}>Session 14</option>
        <option value={"15"}>Session 15</option>
        <option value={"16"}>Session 16</option>
        <option value={"17"}>Session 17</option>
        <option value={"18"}>Session 18</option>
        <option value={"19"}>Session 19</option>
        <option value={"20"}>Session 20</option>
        <option value={"21"}>Session 21</option>
        <option value={"22"}>Session 22</option>
        <option value={"23"}>Session 23</option>
        <option value={"24"}>Session 24</option>
        <option value={"25"}>Session 25</option>
        <option value={"26"}>Session 26</option>
        <option value={"27"}>Session 27</option>
        <option value={"28"}>Session 28</option>
        <option value={"29"}>Session 29</option>
        <option value={"30"}>Session 30</option>
        <option value={"31"}>Session 31</option>
        <option value={"32"}>Session 32</option>
        <option value={"33"}>Session 33</option>
        <option value={"34"}>Session 34</option>
        <option value={"35"}>Session 35</option>
        <option value={"36"}>Session 36</option>
        <option value={"37"}>Session 37</option>
        <option value={"38"}>Session 38</option>
        <option value={"39"}>Session 39</option>
        <option value={"40"}>Session 40</option>
        <option value={"41"}>Session 41</option>
        <option value={"42"}>Session 42</option>
        <option value={"43"}>Session 43</option>
        <option value={"44"}>Session 44</option>
        <option value={"45"}>Session 45</option>
        <option value={"46"}>Session 46</option>
        <option value={"47"}>Session 47</option>
        <option value={"48"}>Session 48</option>
        <option value={"49"}>Session 49</option>
        <option value={"50"}>Session 50</option>
        <option value={"51"}>Session 51</option>
        <option value={"52"}>Session 52</option>
        <option value={"53"}>Session 53</option>
        <option value={"54"}>Session 54</option>
        <option value={"55"}>Session 55</option>
        <option value={"56"}>Session 56</option>
        <option value={"57"}>Session 57</option>
        <option value={"58"}>Session 58</option>
        <option value={"59"}>Session 59</option>
        <option value={"60"}>Session 60</option>
      </select>
    </div>
  );
}

export default FilterMeetNumber;
